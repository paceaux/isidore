import Dictionaries from '../dicts/index';
import { LANGUAGE_DICTIONARIES } from '../constants';

const types = [
    {
        type: 'declarative',
        punctuationMarkers: ['.'],
    },
    {
        type: 'interrogative',
        punctuationMarkers: ['?', '¿'],
    },
    {
        type: 'exclamatory',
        punctuationMarkers: ['!', '¡'],
    },
    {
        type: 'imperative',
        punctuationMarkers: [],
    },
    {
        type: 'exclamatory+interrogative',
        punctuationMarkers: ['!?', '?!', '‽'],
    },
];

function guessSentenceTypeByPunctuation(text) {
    let typeList = types[0];

    typeList = types.filter((type) => {
        const markersPresent = type
            .punctuationMarkers
            .filter(marker => text.indexOf(marker) !== -1);

        return markersPresent.length > 0;
    });

    const typeFromList = typeList[typeList.length - 1];
    const sentenceType = typeFromList ? typeFromList.type : '';

    return sentenceType;
}

/**
 * @param  {array} typeList array of objects that are the different sentence types
 * @returns {array} array of strings that are the punctuations
 */
function getSentencePunctuations(typeList) {
    const results = [];

    typeList.forEach((type) => {
        results.push(...type.punctuationMarkers);
    });

    return results;
}

/** creates a regular expression from an array of punctuation
 * @param  {Array} punctuationList strings that contain punctuation
 * @returns {RegExp} regular expression that can be used to identify punctuation
 */
function getPunctuationRegex(punctuationList) {
    const regexString = punctuationList.reduce((prev, cur, idx) => {
        const separator = idx ? '|' : '';
        const current = `(\\${cur})`;

        return `${prev}${separator}${current}`;
    }, '');

    return new RegExp(`(${regexString})`, 'g');
}

/** removes sentence-terminating/initiating punctuation
 * @param  {string} text full string of text
 * @returns {string} text without punctuation
 */
function getStrippedPunctuation(text) {
    const punctuationList = getSentencePunctuations(types);
    const puncuationRegex = getPunctuationRegex(punctuationList);

    return text.replace(puncuationRegex, '');
}

/** gets an array of lowercased words
 * @param  {string} text full string of text (like a sentence)
 * @returns {array} an array of strings that are all lowercased
 */
function getRawWordList(text) {
    const uncasedText = text.toLowerCase();
    const strippedPunctuation = getStrippedPunctuation(uncasedText);
    const regex = /\w+/g;

    return strippedPunctuation.match(regex);
}
/**
 * @param  {array} textArray array of words
 * @param  {string} language two letter abbreviation for language
 * @returns {array} array of either PartOfSpeech or Word objects
 */
function getWordList(textArray, language) {
    const dictionary = Dictionaries[language];

    return textArray.map((word) => dictionary.findWord(word)[0]);
}
/**
 * @param  {string} text a single sentence that contains terminating punctuation
 * @param  {string} type type of sentence (will be guessed if not provided)
 * @param  {string} language='en'  ISO-639-1 language code with optional national variety
 * @member {string} text the original text of the sentence
 * @member {string} language  ISO-639-1 language code with optional national variety
 * @member {string} dictionary the dictionary that the sentence has used. Default is 'En'
 * @member {type} string the type of sentence (declarative, interrogative, imperative, exclamatory)
 * @member {array} rawWordList only the words in the sentence
 * @member {array} wordList each word in the sentence classified as either a part of speech or word
 * @member {array} types the possible types that a sentence could have
 * @method getSentenceType guesses the type of sentence based on punctuation
 */
function Sentence({ text, type, language = 'en' } = {}) {
    this.text = text;
    this.language = language.toLowerCase();
    this.dictionary = LANGUAGE_DICTIONARIES.get(this.language.toLowerCase());

    this.rawWordList = getRawWordList(this.text);
    this.wordList = getWordList(this.rawWordList, this.dictionary);

    if (!type) {
        this.type = guessSentenceTypeByPunctuation(text) || 'declarative';
    }

    return this.text;
}

Sentence.prototype.getSentenceType = guessSentenceTypeByPunctuation;
Sentence.prototype.types = types;

export default Sentence;

import Dictionaries from '../dicts/index';

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

    return typeList[typeList.length - 1].type;
}

function getSentencePunctuations(typeList) {
    const results = [];

    typeList.forEach((type) => {
        results.push(...type.punctuationMarkers);
    });

    return results;
}

function getPunctuationRegex(punctuationList) {

    const regexString = punctuationList.reduce((prev, cur, idx) => {
        const separator = idx ? '|' : '';
        const current = `(\\${cur})`;

        return `${prev}${separator}${current}`;
    }, '');

    return new RegExp(`(${regexString})`, 'g');
}

function getStrippedPunctuation(text) {
    const punctuationList = getSentencePunctuations(types);
    const puncuationRegex = getPunctuationRegex(punctuationList);

    return text.replace(puncuationRegex, '');
}

function getRawWordList(text) {
    const uncasedText = text.toLowerCase();
    const strippedPunctuation = getStrippedPunctuation(uncasedText);
    const regex = /\w+/g;

    return strippedPunctuation.match(regex);
}

function getWordList(textArray, language) {
    const dictionary = Dictionaries[language];

    return textArray.map((word) => dictionary.findWord(word)[0]);
}

function Sentence(text, language = 'En', type) {
    this.text = text;
    this.type = type;
    this.language = language;

    this.rawWordList = getRawWordList(this.text);
    this.wordList = getWordList(this.rawWordList, this.language);

    if (!type) {
        this.type = guessSentenceTypeByPunctuation(text);
    }

    if (!language) {
        this.language = 'En';
    }

    return this.text;
}

Sentence.prototype.getSentenceType = guessSentenceTypeByPunctuation;
Sentence.prototype.types = types;

export default Sentence;

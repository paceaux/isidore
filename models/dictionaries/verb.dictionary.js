import Dictionary from '../dictionary';
import Verb from '../partsOfSpeech/verb';
import Word from '../word';

/** Guesses which conjugation a verb is using.
 * Note: this will get lots of undefined for English
 * @param  {string} word
 * @returns {object} conjugation for the word
 */
function guessConjugation(word, conjugations = this.conjugations) {
    const result = conjugations.findConjugationByInflection(word);

    return result;
}

/** Attempts to find the root form of a verb
 * @param  {string} word verb to search for
 * @param {conjugation} conjugation object returned from guessConjugation
 * @returns {string}
 */
function getRootVerb(word, conjugation) {
    return word.replace(conjugation.inflectedOn, '');
}

/**
 * @param  {String} word word to search for
 * @returns {Object} Verb if successful, Word if unsuccessful
 */
function findVerb(word) {
    const conjugation = guessConjugation(word, this.conjugations);
    const root = conjugation ? getRootVerb(word, conjugation).toLowerCase() : word.toLowerCase();
    const nWith = conjugation && conjugation.fix === 'prefix' ? 'endsWith' : 'startsWith';
    const list = this.list.filter(obj => obj.verb[nWith](root));

    // todo: decide if we really need to go over the list again and set types
    // todo: why not have a "findVerbs"
    const typedList = list.map(verbObj => new Verb(verbObj.verb, verbObj.type, conjugation));

    return typedList.length === 0 ? new Word(word) : typedList[0];
}

/** Verb Dictionary
 * @param  {Array} list Verbs with types
 * @param  {String} language two-letter abbreviation of language
 * @param   {object} conjugations conjugations of verbs
 * @member {list} Array of typed Verbs
 * @member {language} String language for the dictionary
 * @method {findWord} searches for a word in the dictionary and returns Verb or Word
 */
function VerbDictionary(list, language, conjugations) {
    this.conjugations = conjugations;
    this.language = language;

    this.GrammarModel = Verb;
    this.partOfSpeech = 'verb';
    this.list = list;
    this.language = language;
}

VerbDictionary.prototype = Object.create(Dictionary.prototype);
VerbDictionary.prototype.findWord = findVerb;
VerbDictionary.prototype.guessConjugation = guessConjugation;
VerbDictionary.prototype.removeConjugation = getRootVerb;

export default VerbDictionary;

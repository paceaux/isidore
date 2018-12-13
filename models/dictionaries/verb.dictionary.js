import Dictionary from '../dictionary';
import Verb from '../partsOfSpeech/verb';
import Word from '../word';

/** Guesses which conjugation a verb is using
 * @param  {string} word
 * @returns {object} conjugation for the word
 */
function guessConjugation(word) {

}
/** returns a word to  its root form
 * @param  {} word
 * @returns {string}
 */
function removeConjugation(word) {

}
/**
 * @param  {String} word word to search for
 * @returns {Object} Verb if successful, Word if unsuccessful
 */
function findVerb(word) {
    const list = this.list.filter(obj => word.toLowerCase().indexOf(obj.verb.toLowerCase()) !== -1);

    const typedList = list.map(verbObj => new Verb(verbObj.verb, verbObj.type));

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
    this.guessConjugation = guessConjugation;
    this.removeConjugation = removeConjugation;
    this.language = language;

    this.GrammarModel = Verb;
    this.partOfSpeech = 'verb';
    this.list = list;
    this.language = language;
}

VerbDictionary.prototype = Object.create(Dictionary.prototype);
VerbDictionary.prototype.findWord = findVerb;

export default VerbDictionary;

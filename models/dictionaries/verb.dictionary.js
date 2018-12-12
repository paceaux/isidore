import Verb from '../partsOfSpeech/verb';
import Word from '../word';

/** Gets all possible conjugations for a verb
 * @param  {string} word
 * @returns {array}
 */
function getConjugations(word) {

}

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
    this.list = list;
    this.language = language;
    this.conjugations = conjugations;

    this.getConjugations = getConjugations;
    this.guessConjugation = guessConjugation;
    this.removeConjugation = removeConjugation;
    this.findWord = findVerb;
}

export default VerbDictionary;

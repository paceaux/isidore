import Interjection from '../partsOfSpeech/interjection';
import Word from '../word';

/**
 * @param  {String} word word to search for
 * @returns {Object} Interjection if successful, Word if unsuccessful
 */
function findInterjection(word) {
    const list = this.list.filter(obj => word.indexOf(obj.interjection) !== -1);

    const typedList = list.map(intObj => new Interjection(
        intObj.interjection,
        intObj.type,
        intObj.wordCategory));

    return typedList.length === 0 ? new Word(word) : typedList[0];
}
/** Interjection Dictionary
 * @param  {Array} list Interjections with types and wordCategories
 * @param  {String} language two-letter abbreviation of language
 * @member {list} Array of typed Interjections
 * @member {language} String language for the dictionary
 * @method {findWord} searches for a word in the dictionary and returns an Interjection or a Word
 */
function InterjectionDictionary(list, language) {
    this.list = list;
    this.language = language;

    this.findWord = findInterjection;
}

export default InterjectionDictionary;

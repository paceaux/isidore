import Dictionary from '../dictionary';
import Adjective from '../partsOfSpeech/adjective';
import Word from '../word';

/**
 * @param  {String} word word to search for
 * @returns {Object} Adjective if successful, Word if unsuccessful
 */
function findAdjective(word) {
    const list = this.list.filter(obj => obj.adjective.toLowerCase() === word.toLowerCase());

    const typedList = list.map(intObj => new Adjective(
        intObj.adjective,
        intObj.type,
        intObj.wordCategory));

    return typedList.length === 0 ? new Word(word) : typedList[0];
}
/** Adjective Dictionary
 * @param  {Array} list adjectives with types and categories
 * @param  {String} language two-letter abbreviation of language
 * @member {list} Array of typed Adjectives
 * @member {language} String language for the dictionary
 * @method {findWord} searches for a word in the dictionary and returns an Adjective or a Word
 */
function AdjectiveDictionary(list, language) {
    const sortedList = list.sort((a, b) => {
        if (a.adjective < b.adjective) return -1;
        if (a.adjective > b.adjective) return 1;
        return 0;
    });
    this.list = sortedList;
    this.language = language;
}

AdjectiveDictionary.prototype = Object.create(Dictionary.prototype);
AdjectiveDictionary.prototype.findWord = findAdjective;
export default AdjectiveDictionary;

import Dictionary from '../dictionary';
import Adverb from '../partsOfSpeech/adverb';
import Word from '../word';

/**
 * @param  {String} word word to search for
 * @returns {Object} Adverb if successful, Word if unsuccessful
 */
function findAdverb(word) {
    const list = this.list.filter(obj => word.toLowerCase() === obj.adverb.toLowerCase());

    const typedList = list.map(adverbObj => new Adverb(adverbObj.adverb, adverbObj.type));

    return typedList.length === 0 ? new Word(word) : typedList[0];
}
/** Adverb Dictionary
 * @param  {Array} list adverbs with types and categories
 * @param  {String} language two-letter abbreviation of language
 * @member {list} Array of typed Adverbs
 * @member {language} String language for the dictionary
 * @method {findWord} searches for a word in the dictionary and returns either an Adverb or a Word
 */
function AdverbDictionary(list, language) {
    const sortedList = list.sort((a, b) => {
        if (a.adverb < b.adverb) return -1;
        if (a.adverb > b.adverb) return 1;
        return 0;
    });
    this.list = sortedList;
    this.language = language;
}

AdverbDictionary.prototype = Object.create(Dictionary.prototype);
AdverbDictionary.prototype.findWord = findAdverb;
export default AdverbDictionary;

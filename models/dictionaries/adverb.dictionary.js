import Adverb from '../partsOfSpeech/adverb';
import Word from '../word';

/**
 * @param  {String} word word to search for
 * @returns {Object} Adverb if successful, Word if unsuccessful
 */
function findAdverb(word) {
    const list = this.list.filter(obj => word.toLowerCase() === obj.adverb);

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
    this.list = list;
    this.language = language;

    this.findWord = findAdverb;
}

export default AdverbDictionary;

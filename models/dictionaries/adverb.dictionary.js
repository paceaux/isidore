import Dictionary from '../dictionary';
import Adverb from '../partsOfSpeech/adverb';

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
    this.GrammarModel = Adverb;
    this.partOfSpeech = 'adverb';
    this.list = sortedList;
    this.language = language;
}

AdverbDictionary.prototype = Object.create(Dictionary.prototype);
export default AdverbDictionary;

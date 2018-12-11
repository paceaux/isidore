import Dictionary from '../dictionary';
import Preposition from '../partsOfSpeech/preposition';

/** Preposition Dictionary
 * @param  {Array} list Prepositions with types
 * @param  {String} language two-letter abbreviation of language
 * @member {list} Array of typed Prepositions
 * @member {language} String language for the dictionary
 * @method {findWord} searches for a word in the dictionary and returns a Preposition or a Word
 */
function PrepositionDictionary(list, language) {
    const sortedList = list.sort((a, b) => {
        if (a.preposition < b.preposition) return -1;
        if (a.preposition > b.preposition) return 1;
        return 0;
    });
    this.GrammarModel = Preposition;
    this.partOfSpeech = 'preposition';
    this.list = sortedList;
    this.language = language;
}

PrepositionDictionary.prototype = Object.create(Dictionary.prototype);

export default PrepositionDictionary;

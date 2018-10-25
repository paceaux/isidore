import Preposition from '../partsOfSpeech/preposition';
import Word from '../word';

/**
 * @param  {String} word word to search for
 * @returns {Object} Preposition if successful, Word if unsuccessful
 */
function findPreposition(word) {
    const list = this.list.filter(obj => word.indexOf(obj.preposition) !== -1);

    const typedList = list.map(prepObj => new Preposition(prepObj.preposition, prepObj.type));

    return typedList.length === 0 ? new Word(word) : typedList[0];
}

/** Preposition Dictionary
 * @param  {Array} list Prepositions with types
 * @param  {String} language two-letter abbreviation of language
 * @member {list} Array of typed Prepositions
 * @member {language} String language for the dictionary
 * @method {findWord} searches for a word in the dictionary and returns a Preposition or a Word
 */
function PrepositionDictionary(list, language) {
    this.list = list;
    this.language = language;

    this.findWord = findPreposition;
}

export default PrepositionDictionary;

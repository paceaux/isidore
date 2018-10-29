import Noun from '../partsOfSpeech/noun';
import Word from '../word';

/**
 * @param  {String} word word to search for
 * @returns {Object} Noun if successful, Word if unsuccessful
 */
function findNoun(word) {
    const defaultFilter = obj => word.toLowerCase().startsWith(obj.noun.toLowerCase());

    const list = this.list.filter(defaultFilter);

    const typedList = list.map(nounObj => new Noun(nounObj.noun, nounObj.type, nounObj.subType));

    return typedList.length === 0 ? new Word(word) : typedList[0];
}
/** Noun Dictionary
 * @param  {Array} list Nouns with types and wordCategories
 * @param  {String} language two-letter abbreviation of language
 * @member {list} Array of typed Nouns
 * @member {language} String language for the dictionary
 * @method {findWord} searches for a word in the dictionary and returns a Noun or a Word
 */
function NounDictionary(list, language, inflections) {
    this.list = list.sort((a, b) => {
        if (a.noun < b.noun) return -1;
        if (a.noun > b.noun) return 1;
        return 0;
    });
    this.language = language;
    this.inflections = inflections;

    this.findWord = findNoun;
}

export default NounDictionary;

import Conjunction from '../partsOfSpeech/conjunction';
import Word from '../word';

/**
 * @param  {String} word word to search for
 * @returns {Object} Conjunction if successful, Word if unsuccessful
 */
function findConjunction(word) {
    const list = this.list.filter(obj => obj.conjunction.includes(word.toLowerCase()));

    const typedList = list.map(conjObj => new Conjunction(conjObj.conjunction, conjObj.type));

    return typedList.length === 0 ? new Word(word) : typedList[0];
}

/** Conjunction Dictionary
 * @param  {Array} list conjunctions with types
 * @param  {String} language two-letter abbreviation of language
 * @member {list} Array of typed Conjunctions
 * @member {language} String language for the dictionary
 * @method {findWord} searches for a word in the dictionary and returns a Conjunction or a Word
 */
function ConjunctionDictionary(list, language) {
    this.list = list;
    this.language = language;

    this.findWord = findConjunction;
}

export default ConjunctionDictionary;

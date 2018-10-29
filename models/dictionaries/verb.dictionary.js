import Verb from '../partsOfSpeech/verb';
import Word from '../word';

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
 * @member {list} Array of typed Verbs
 * @member {language} String language for the dictionary
 * @method {findWord} searches for a word in the dictionary and returns Verb or Word
 */
function VerbDictionary(list, language) {
    this.list = list;
    this.language = language;

    this.findWord = findVerb;
}

export default VerbDictionary;

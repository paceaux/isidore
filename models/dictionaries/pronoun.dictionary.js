import Pronoun from '../partsOfSpeech/pronoun';
import Word from '../word';

/**
 * @param  {String} word word to search for
 * @returns {Object} Pronoun if successful, Word if unsuccessful
 */
function findPronoun(word) {
    const list = this.list.filter(obj => word.toLowerCase() === obj.pronoun.toLowerCase());

    const typedList = list.map(pronounObj => new Pronoun(
        pronounObj.pronoun,
        pronounObj.type,
        pronounObj.referent,
        pronounObj.gender,
        pronounObj.person,
        pronounObj.quantity));

    return typedList.length === 0 ? new Word(word) : typedList[0];
}

/** Pronoun Dictionary
 * @param  {Array} list Pronouns with types, referents, genders, persons, and quantities
 * @param  {String} language two-letter abbreviation of language
 * @member {list} Array of typed Pronouns
 * @member {language} String language for the dictionary
 * @method {findWord} searches for a word in the dictionary and returns a Pronoun or a Word
 */
function PronounDictionary(list, language) {
    this.list = list;
    this.language = language;

    this.findWord = findPronoun;
}

export default PronounDictionary;

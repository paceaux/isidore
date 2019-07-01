import Word from './word';
import { LANGUAGE_NAMES } from '../constants';

/**
 * @param  {String} word word to search for
 * @returns {Array} result of searching across all dictionaries in the language
 */
function findWord(word) {
    const dictionaries = this.grammarDictionaries;
    const searchResults = [];

    Object.keys(dictionaries)
        .forEach((dictName) => {
            const dict = dictionaries[dictName];
            const searchedWord = dict.findWord(word);

            if (searchedWord.partOfSpeech) searchResults.push(searchedWord);
        });

    if (searchResults.length === 0) searchResults.push(new Word(word));

    return searchResults;
}

/** Language
 * @param  {Object} dictionaries={} individual Dictionary objects that are part of the language
 * @param  {String} language='en' ISO-639-1 language code with optional national variety
 * @member {grammarDictionaries} Dictionary objects in the Language
 * @member {language} language ISO-639-1 language code with optional national variety
 * @member {String} languageName English version of ISO 639-1 language name
 * @method {findWord} searches for word across all dictionaries and returns an Array of words
 */
function Language(dictionaries = {}, language = 'en') {
    this.grammarDictionaries = dictionaries;
    this.language = language.toLowerCase();
    this.findWord = findWord;

    Object.defineProperty(this, 'languageName', {
        get() {
            const isoCode = this.language.toLowerCase();

            return LANGUAGE_NAMES.get(isoCode);
        },
    });
    return this;
}

export default Language;

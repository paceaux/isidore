import Word from './word';

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
 * @param  {String} language='En' two-letter abbreviation for language
 * @member {grammarDictionaries} Dictionary objects in the Language
 * @member {language} language two-letter abbreviation for language
 * @method {findWord} searches for word across all dictionaries and returns an Array of words
 */
function Language(dictionaries = {}, language = 'En') {
    this.grammarDictionaries = dictionaries;
    this.language = language;
    this.findWord = findWord;
    return this;
}

export default Language;

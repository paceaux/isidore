import Word from './word';

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

function Language(dictionaries = {}, language = 'En') {
    this.grammarDictionaries = dictionaries;
    this.language = language;
    this.findWord = findWord;
    return this;
}

export default Language;

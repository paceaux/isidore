
function findWord(word) {

    return word;
}

function Language(dictionaries = {}, language = 'En') {
    this.grammarDictionaries = dictionaries;
    this.language = language;
    this.findWord = findWord;
    return this;
}

export default Language;

import Word from './word';

/**
 * @param  {String} word word to search for
 * @returns {Object} Word if successful
 */
function findWord(word) {
    const { partOfSpeech } = this;
    const list = this.list.filter(obj => word.toLowerCase() === obj[partOfSpeech].toLowerCase());

    const typedList = list.map(wordObj => new this.GrammarModel(wordObj[partOfSpeech], wordObj.type));

    return typedList.length > 0 ? typedList[0] : new Word(word);
}

function Dictionary(list, language) {
    this.language = language;
}

Dictionary.prototype = {
    language: undefined,
    GrammarModel: Word,
    partOfSpeech: 'word',
    findWord,
};

export default Dictionary;

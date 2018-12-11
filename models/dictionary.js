import Word from './word';

/**
 * @param  {String} word word to search for
 * @returns {Object} Word if successful
 */
function findWord(word) {
    const list = this.list.filter(obj => word.toLowerCase() === obj.word.toLowerCase());

    const typedList = list.map(wordObj => new Word(wordObj.word));

    return typedList[0];
}

function Dictionary(list, language) {

    this.language = language;
}

Dictionary.prototype = {
    language: undefined,
    partOfSpeech: 'word',
    findWord,
};

export default Dictionary;

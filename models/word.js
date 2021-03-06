/**
 * @param  {String} word single word to be converted into a word object
 * @member partOfSpeech=undefined
 * @member type=undefined part of speech
 * @member types the types that this word can have
 */
function Word(word) {
    this.word = word;
}

Word.prototype = {
    type: undefined,
    types: [],
    partOfSpeech: undefined,
};

export default Word;

import Word from '../word';
/**
 * https://en.wikipedia.org/wiki/Interjection
 */

const types = [
    {
        type: 'volitive',
    },
    {
        type: 'emotive',
    },
    {
        type: 'cognitive',
    },
];

const wordCategories = [
    {
        wordCategory: 'primary',
    },
    {
        wordCategory: 'secondary',
    },
];

/** Interjection: Expresses an emotion
 * @param  {string} word original word
 * @param  {string} type volitve, emotive, cognitive
 * @member word word raw word
 * @member type string. volitive, emotive, cognitive
 * @member types array.
 * @member wordCategory string. primary, secondary.
 * secondary interjections could be confused with another part of speech
 * @member wordCategories array. word categories
 */
function Interjection(word, type, wordCategory) {
    this.partOfSpeech = 'interjection';
    this.word = word;
    this.type = type;
    this.wordCategory = wordCategory;

    return this.word;
}
Interjection.prototype = Object.create(Word.prototype);
Interjection.prototype.types = types;
Interjection.prototype.wordCategories = wordCategories;

export default Interjection;

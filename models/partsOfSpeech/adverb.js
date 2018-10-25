/**
 * http://www.studyandexam.com/adverb2.html
 * http://www.grammar.cl/Basic/Adverbs_Frequency.htm
 * https://dictionary.cambridge.org/us/grammar/british-grammar/about-adjectives-and-adverbs/adverbs-types
 */

const types = [
    {
        type: 'manner',
    },
    {
        type: 'place',
    },
    {
        type: 'time',
    },
    {
        type: 'frequency',
    },
    {
        type: 'focusing',
    },
    {
        type: 'degree',
    },
    {
        type: 'linking',
    },
];
/** Adverb: Describes verbs, adjectives, or other adverbs
 * @param  {string} word original word
 * @param  {string} type manner, place, time, frequency, focusing, degree, linking
 * @member word string. raw word
 * @member type string. manner, place, time, frequency, focusing, degree, linking
 * @member types array.
 */
function Adverb(word, type) {
    this.partOfSpeech = 'adverb';
    this.word = word;
    this.type = type;

    return this.word;
}

Adverb.prototype.types = types;

export default Adverb;

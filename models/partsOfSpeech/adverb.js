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

function Adverb(word, type) {
    this.partOfSpeech = 'adverb';
    this.word = word;
    this.type = type;

    return this.word;
}

Adverb.prototype.types = types;

export default Adverb;

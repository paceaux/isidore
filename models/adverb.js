/**
 * http://www.studyandexam.com/adverb2.html
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
];

function Adverb(word, type) {
    this.word = word;
    this.type = type;

    return this.word;
}

Adverb.prototype.types = types;

export default Adverb;

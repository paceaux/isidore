/**
 * Classifications of a conjunction
 */

const types = [
    {
        type: 'coordinating',
    },
    {
        type: 'subordinating',
    },
    {
        type: 'correlating',
    },
];

function Conjunction(word, type) {
    this.partOfSpeech = 'conjunction';
    this.type = type;
    this.word = word;

    if (Array.isArray(word)) {
        const [firstWord, nextWord] = word;
        this.word = firstWord;
        this.nextWord = nextWord;
    }

    return this.word;
}

Conjunction.prototype.types = types;

export default Conjunction;

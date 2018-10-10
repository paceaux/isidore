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
    this.type = type;
    this.word = word;

    return this.word;
}

Conjunction.prototype.types = types;

export default Conjunction;

/**
 * https://www.uvu.edu/writingcenter/docs/handouts/grammar/typesofverbs.pdf
 * https://en.wikipedia.org/wiki/Verb
 */

const types = [
    {
        type: 'avalent',
    },
    {
        type: 'transitive',
    },
    {
        type: 'intransitive',
    },
    {
        type: 'ditransitive',
    },
];

const valencies = [
    {
        valence: 0, // avalent
    },
    {
        valence: 1, // intransitive
    },
    {
        valence: 2, // transitive
    },
    {
        valence: 3, // ditransitive
    },
];

function Verb(word, type) {
    this.word = word;
    this.type = type;
    this.valence = this.valencies[this.types.indexOf(type)];

    return this.word;
}

Verb.prototype.types = types;
Verb.prototype.valencies = valencies;

export default Verb;

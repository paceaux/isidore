/**
 * https://www.uvu.edu/writingcenter/docs/handouts/grammar/typesofverbs.pdf
 * https://en.wikipedia.org/wiki/Verb
 */

const types = [
    {
        type: 'avalent',
        valence: 0,
    },
    {
        type: 'transitive',
        valence: 2,
    },
    {
        type: 'intransitive',
        valence: 1,
    },
    {
        type: 'ditransitive',
        valence: 3,
    },
];

function Verb(word, type) {
    this.partOfSpeech = 'verb';
    this.word = word;

    if (type) {
        const typeObj = types.find(t => t.type === type);
        this.type = type;
        this.valence = typeObj.valence;
    }
}

Verb.prototype.types = types;

export default Verb;

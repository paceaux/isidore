/**
 * https://www.fluentu.com/blog/english/english-adjectives/
 * http://www.learnesl.net/10-kinds-of-adjective-in-english/
 */

const degrees = [
    {
        degree: 'positive',
    },
    {
        degree: 'comparative',
    },
    {
        degree: 'superlative',
    }
];

const types = [
    {
        type : 'descriptive',
    },
    {
        type: 'quantitative',
    },
    {
        type: 'demonstrative',
    },
    {
        type: 'possessive',
    },
    {
        type: 'interrogative',
    },
    {
        type: 'distributive',
    },
    {
        type: 'proper',
    },
    {
        type: 'article',
        subTypes: [
            'defininite',
            'indefinite'
        ]
    }
];

function Adjective(word, type, degree) {
    this.word = word;
    this.type = type;
    this.degree = degree;

    return this.word;
}

Adjective.prototype.types = types;
Adjective.prototype.degrees = degrees;

export default Adjective;

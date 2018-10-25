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
    },
];

const types = [
    {
        type: 'qualitative',
    },
    {
        type: 'quantitative',
    },
    {
        type: 'demonstrative',
        subTypes: [
            'proximity',
            'sequence',
        ],
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
            'indefinite',
        ],
    },
];
/** Adjective: Describes person, place, thing, or idea
 * @param  {string} word original word
 * @param  {string} type qualitative, quantitative, demonstrative,
 * possessive, interrogative, distributive, proper, article
 * @param  {string} degree positive, comparative, superlative
 * @member word string. raw word
 * @member type string. qualitative || quantitative || demonstrative ||
 * possessive || interrogative || distributive || proper || article
 * @member degree string. positive, comparative, superlative
 * @member types array.
 * @member degrees array.
 */
function Adjective(word, type, degree) {
    this.partOfSpeech = 'adjective';
    this.word = word;
    this.type = type;
    this.degree = degree;

    return this.word;
}

Adjective.prototype.types = types;
Adjective.prototype.degrees = degrees;

export default Adjective;

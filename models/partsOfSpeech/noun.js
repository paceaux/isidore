/**
 * https://en.oxforddictionaries.com/grammar/types-of-noun
 * https://en.wikipedia.org/wiki/Noun#Classification
 * https://en.wikipedia.org/wiki/Proper_noun
 */

const types = [
    {
        type: 'entity-class',
        subTypes: [
            'proper',
            'common',
        ],
    },
    {
        type: 'enumerative',
        subTypes: [
            'countable',
            'uncountable', // mass noun
        ],
    },
    {
        type: 'sense',
        subTypes: [
            'concrete',
            'abstract',
        ],
    },
    {
        type: 'ownership',
        subTypes: [
            'alien',
            'inalienable',
        ],
    },
];

/** Noun: person, place, thing, or idea
 * @param  {string} word original word
 * @param  {string} type entity-class, enumerative, sense, ownership
 * @member word word raw word
 * @member type string. entity-class, enumerative, sense, ownership
 * @member types array.
 * @member subType string. most nouns have a subType
 */
function Noun(word, type, subType) {
    this.partOfSpeech = 'noun';
    this.word = word;
    this.type = type;
    this.subType = subType;

    return this.word;
}

Noun.prototype.types = types;

export default Noun;

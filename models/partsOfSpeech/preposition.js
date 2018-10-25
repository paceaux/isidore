/**
 * https://www.thefreedictionary.com/Categories-of-Prepositions.htm
 */

const types = [
    {
        type: 'time',
    },
    {
        type: 'place',
    },
    {
        type: 'direction',
    },
    {
        type: 'agency',
    },
    {
        type: 'instrument',
    },
    {
        type: 'purpose',
    },
    {
        type: 'connection',
    },
    {
        type: 'origin',
    },
];

/** Preposition: expresses relationships between pronouns/nouns and other pronouns/nouns
 * @param  {string} word original word
 * @param  {string} type time, place, direction, agency, instrument, purpose, connection, origin
 * @member word string. raw word
 * @member type string. time, place, direction, agency, instrument, purpose, connection, origin
 * @member types array.
 */
function Preposition(word, type) {
    this.word = word;
    this.partOfSpeech = 'preposition';

    if (type) {
        this.type = type;
    }

    return this.word;
}

Preposition.prototype.types = types;

export default Preposition;

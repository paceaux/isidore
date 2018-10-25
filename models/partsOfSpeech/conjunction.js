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

/** Conjunction: Joins clauses
 * @param  {string} word original word
 * @param  {string} type coordinating, subordinating, correlating
 * @member word string. raw word
 * @member type string. coordinating, subordinating, correlating
 * @member types array.
 * @member nextWord string. if the conjunction is a correlating, there's two words, this is the second
 */
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

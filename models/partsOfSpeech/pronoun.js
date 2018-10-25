/**
 * Classifications of a pronoun
 */

const quantities = [
    {
        quantity: 'singular',
    },
    {
        quantity: 'plural',
    },
];

const referents = [
    {
        referent: 'animate',
    },
    {
        referent: 'inanimate',
    },
];

const genders = [
    {
        gender: 'masculine',
    },
    {
        gender: 'feminine',
    },
    {
        gender: 'neuter',
    },
];

const types = [
    {
        type: 'subject',
    },
    {
        type: 'object',
    },
    {
        type: 'determiner',
    },
    {
        type: 'possessive',
    },
    {
        type: 'reflexive',
    },
];
/** Pronoun: takes the place of a noun
 * @param  {string} word original word
 * @param  {string} type subject, object, determiner, possessive, reflexive
 * @param {string} referent animate, inanimate
 * @param {string} gender masculine, feminine, neuter,
 * @param {number} person 1,2,3
 * @param {string} quantity singular,plural
 * @member word string. raw word
 * @member type string. subject, object, determiner, possessive, reflexive
 * @member types array.
 * @member referent string. animate, inanimate
 * @member gender string masculine, feminine, neuter
 * @member person number. 1, 2, 3
 * @member quantity string. singular,plural
 */
function Pronoun(word, type, referent, gender, person, quantity) {
    this.partOfSpeech = 'pronoun';
    this.word = word;
    this.referent = referent;
    this.gender = gender;
    this.type = type;
    this.person = person;
    this.quantity = quantity;

    return this.word;
}
Pronoun.prototype.quantities = quantities;
Pronoun.prototype.referents = referents;
Pronoun.prototype.genders = genders;
Pronoun.prototype.types = types;

export default Pronoun;

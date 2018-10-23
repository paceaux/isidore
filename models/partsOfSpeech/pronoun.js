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

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
        referent: 'inanimate'
    }
];

const genders = [
    {
        gender: 'male',
    },
    {
        gender: 'female',
    },
    {
        gender: 'neuter',
    }
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
    }
];

function Pronoun(word, referent, gender, type) {
    this.word = word;
    this.referent = referent;
    this.gender = gender;
    this.type = type;

    return this.word;
}
Pronoun.prototype.quantities = quantities;
Pronoun.prototype.referents = referents;
Pronoun.prototype.genders = genders;
Pronoun.prototype.types = types;

export default Pronoun;
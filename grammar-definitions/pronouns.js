/**
 * Classifications of a pronoun
 */

module.exports = {
    quantities: [
        {
            quantity: 'singular',
        },
        {
            quantity: 'plural',
        },
    ],
    referents: [
        {
            referent: 'animate',
        },
        {
            referent: 'inanimate'
        }
    ],
    genders: [
        {
            gender: 'male',
        },
        {
            gender: 'female',
        },
        {
            gender: 'neuter',
        }
    ],
    types: [
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
    ]
}
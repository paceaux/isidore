/*
* English pronoun list
* https://www.ef.edu/english-resources/english-grammar/pronouns/
* person: 1,2,3 (first, second, third person)
* gender: f == female, m == male, n == neutral
* number: s == singular, p == plural
* referent: i == inanimate, a == animate
*/

/*
Possible controversy: added a third-person singular neutral not typically listed:
they. they is used in informal speech to refer to a person of unknown gender.
If you disagree, take it out. I'm a descriptive linguist.
 */

export default [
    {
        metadata: {
            person: 1,
            number: 's',
            gender: 'n',
            referent: 'a',
        },
        subject: 'I',
        object: 'you',
        determiner: 'my',
        possessive: 'mine',
        reflexive: 'myself',
    },
    {
        metadata: {
            person: 1,
            number: 'p',
            gender: 'n',
            referent: 'a',
        },
        subject: 'we',
        object: 'us',
        determiner: 'our',
        possessive: 'ours',
        reflexive: 'ourselves',
    },
    {
        metadata: {
            person: 2,
            number: 's',
            gender: 'n',
            referent: 'a',
        },
        subject: 'you',
        object: 'you',
        determiner: 'your',
        possessive: 'yours',
        reflexive: 'yourself',
    },
    {
        metadata: {
            person: 2,
            number: 'p',
            gender: 'n',
            referent: 'a',
        },
        subject: 'you',
        object: 'you',
        determiner: 'your',
        possessive: 'your',
        reflexive: 'yourselves',
    },
    {
        metadata: {
            person: 3,
            number: 's',
            gender: 'm',
            referent: 'a',
        },
        subject: 'he',
        object: 'him',
        determiner: 'his',
        possessive: 'his',
        reflexive: 'himself',
    },
    {
        metadata: {
            person: 3,
            number: 's',
            gender: 'f',
            referent: 'a',
        },
        subject: 'she',
        object: 'her',
        determiner: 'her',
        possessive: 'her',
        reflexive: 'herself',
    },
    {
        metadata: {
            person: 3,
            number: 's',
            gender: 'n',
            referent: 'i',
        },
        subject: 'it',
        object: 'it',
        determiner: 'its',
        reflexive: 'itself',
    },
    {
        metadata: {
            person: 3,
            number: 's',
            gender: 'n',
            referent: 'a',
        },
        subject: 'they',
        object: 'them',
        determiner: 'their',
        possessive: 'theirs',
        reflexive: 'themself',
    },
    {
        metadata: {
            person: 3,
            number: 'p',
            gender: 'n',
            referent: 'a',
        },
        subject: 'they',
        object: 'them',
        determiner: 'their',
        possessive: 'theirs',
        reflexive: 'themselves',
    },
];

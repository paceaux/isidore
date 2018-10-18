const chai = require('chai');

const { expect } = chai;
const grammar = require('..');

const { Dictionaries } = grammar;

describe('There are dictionaries', () => {
    it('There is an english dictionary', () => {
        expect(Dictionaries).to.have.property('En');
    });
});

describe('The English dictionary...', () => {
    it('has an adjective dictionary', () => {
        expect(Dictionaries).to.have.property('En');
        const { En } = Dictionaries;

        expect(En).to.have.property('Adjectives');
    });

    it('has an adverb dictionary', () => {
        expect(Dictionaries).to.have.property('En');
        const { En } = Dictionaries;

        expect(En).to.have.property('Adverbs');
    });

    it('has a conjunction dictionary', () => {
        expect(Dictionaries).to.have.property('En');
        const { En } = Dictionaries;

        expect(En).to.have.property('Conjunctions');
    });

    it('has an interjection dictionary', () => {
        expect(Dictionaries).to.have.property('En');
        const { En } = Dictionaries;

        expect(En).to.have.property('Interjections');
    });

    it('has a noun dictionary', () => {
        expect(Dictionaries).to.have.property('En');
        const { En } = Dictionaries;

        expect(En).to.have.property('Nouns');
    });

    it('has a preposition dictionary', () => {
        expect(Dictionaries).to.have.property('En');
        const { En } = Dictionaries;

        expect(En).to.have.property('Prepositions');
    });

    it('has a pronoun dictionary', () => {
        expect(Dictionaries).to.have.property('En');
        const { En } = Dictionaries;

        expect(En).to.have.property('Pronouns');
    });

    it('has a verb dictionary', () => {
        expect(Dictionaries).to.have.property('En');
        const { En } = Dictionaries;

        expect(En).to.have.property('Verbs');
    });
});

describe('The dictionaries return many kinds of things: ', () => {
    describe('the noun dictionary ', () => {
        expect(Dictionaries).to.have.property('En');

        const { En } = Dictionaries;
        const { Nouns } = En;
        const commonNouns = Nouns.list.filter(noun => noun.subType === 'common');
        const uncountableNouns = Nouns.list.filter(noun => noun.subType === 'uncountable');
        const countableNouns = Nouns.list.filter(noun => noun.subType === 'countable');
        expect(En).to.have.property('Nouns');
        expect(Nouns).to.be.an('object');

        it('has common nouns', () => {
            expect(commonNouns).to.have.have.length.at.least(10);
        });
        it('has uncountable nouns', () => {
            expect(uncountableNouns).to.have.have.length.at.least(10);
        });
        it('has countable nouns', () => {
            expect(countableNouns).to.have.have.length.at.least(10);
        });
    });

    describe('the verb dictionary...', () => {
        expect(Dictionaries).to.have.property('En');

        const { En } = Dictionaries;
        const { Verbs } = En;
        const transitiveVerbs = Verbs.list.filter(verb => verb.type === 'transitive');
        const intransitiveVerbs = Verbs.list.filter(verb => verb.type === 'intransitive');

        it('has transitive verbs', () => {
            expect(transitiveVerbs).to.have.have.length.at.least(10);
        });
        it('has intransitive verbs', () => {
            expect(intransitiveVerbs).to.have.have.length.at.least(10);
        });
    });
});

describe('Searching in the English dictionary...', () => {
    it('can find a noun in the noun dictionary', () => {
        const { En } = Dictionaries;
        const { Nouns } = En;
        const word = Nouns.findWord('accident');

        expect(word).to.be.an('object');
        expect(word).to.have.property('type');
    });
    it('can find a noun in the noun dictionary even if it\'s plural', () => {
        const { En } = Dictionaries;
        const { Nouns } = En;
        const word = Nouns.findWord('accidents');

        expect(word).to.be.an('object');
        expect(word).to.have.property('type');
    });
    it('can find a verb in the verb dictionary', () => {
        const { En } = Dictionaries;
        const { Verbs } = En;
        const word = Verbs.findWord('give');

        expect(word).to.be.an('object');
        expect(word).to.have.property('type');
    });

    it('can find a preposition in the preposition dictionary', () => {
        const { En } = Dictionaries;
        const { Prepositions } = En;
        const word = Prepositions.findWord('to');

        expect(word).to.be.an('object');
    });

    it('can find an adverb in the adverb dictionary', () => {
        const { En } = Dictionaries;
        const { Adverbs } = En;
        const word = Adverbs.findWord('very');

        expect(word).to.be.an('object');
    });

    it('can find a conjunction in the conjunction dictionary', () => {
        const { En } = Dictionaries;
        const { Conjunctions } = En;
        const word = Conjunctions.findWord('and');

        expect(word).to.be.an('object');
    });

    it('can find a correlating conjunction in the conjunction dictionary', () => {
        const { En } = Dictionaries;
        const { Conjunctions } = En;
        const word = Conjunctions.findWord('nor');

        expect(word).to.be.an('object');
    });
});

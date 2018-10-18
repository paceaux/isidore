const chai = require('chai');

const { expect } = chai;
const grammar = require('..');

const { PartsOfSpeech } = grammar;

describe('PartsOfSpeech...', () => {
    describe('includes adjectives and', () => {
        it('can create an adjective', () => {
            const { Adjective } = PartsOfSpeech;
            const adj = new Adjective('tall', 'Descriptive');

            expect(adj).to.haveOwnProperty('word');
        });

        it('adjectives can have types and degrees', () => {
            const { Adjective } = PartsOfSpeech;
            const adj = new Adjective('tall', 'Descriptive');

            expect(adj).to.have.property('types');
            expect(adj).to.have.property('degrees');
        });
    });

    describe('includes conjunctions and', () => {
        it('can create a conjunction', () => {
            const { Conjunction } = PartsOfSpeech;
            const conj = new Conjunction('and');

            expect(conj).to.have.ownProperty('word');
        });

        it('can have types', () => {
            const { Conjunction } = PartsOfSpeech;
            const conj = new Conjunction('and');

            expect(conj).to.have.property('types');
        });
    });
    describe('includes pronouns and', () => {
        it('can create a pronoun', () => {
            const { Pronoun } = PartsOfSpeech;
            const pronoun = new Pronoun('I');

            expect(pronoun).to.have.ownProperty('word');
        });

        it('can have types, quantities, referents, and genders', () => {
            const { Pronoun } = PartsOfSpeech;
            const conj = new Pronoun('I');

            expect(conj).to.have.property('types');
            expect(conj).to.have.property('quantities');
            expect(conj).to.have.property('referents');
            expect(conj).to.have.property('genders');
        });
    });

    describe('includes adverbs and', () => {
        it('can create an adverb', () => {
            const { Adverb } = PartsOfSpeech;
            const adv = new Adverb('happily');

            expect(adv).to.have.ownProperty('word');
        });

        it('can have types', () => {
            const { Adverb } = PartsOfSpeech;
            const adv = new Adverb('happily');

            expect(adv).to.have.property('types');
        });
    });

    describe('include prepositions and', () => {
        it('can create a preposition', () => {
            const { Preposition } = PartsOfSpeech;
            const prep = new Preposition('to');

            expect(prep).to.have.ownProperty('word');
        });

        it('can have types', () => {
            const { Preposition } = PartsOfSpeech;
            const prep = new Preposition('to');

            expect(prep).to.have.property('types');
        });
    });

    describe('includes verbs and', () => {
        it('can create a verb', () => {
            const { Verb } = PartsOfSpeech;
            const verb = new Verb('run');

            expect(verb).to.have.ownProperty('word');
        });

        it('can have types', () => {
            const { Verb } = PartsOfSpeech;
            const verb = new Verb('run');

            expect(verb).to.have.property('types');
        });
    });

    describe('includes nouns and', () => {
        it('can create a noun', () => {
            const { Noun } = PartsOfSpeech;
            const noun = new Noun('life');

            expect(noun).to.have.ownProperty('word');
        });

        it('can have types', () => {
            const { Noun } = PartsOfSpeech;
            const noun = new Noun('life');

            expect(noun).to.have.property('types');
        });
    });

    describe('includes interjections and', () => {
        it('can create an interjection', () => {
            const { Interjection } = PartsOfSpeech;
            const interjection = new Interjection('hey');

            expect(interjection).to.have.ownProperty('word');
            expect(interjection).to.have.ownProperty('word');
        });

        it('can have types and categories', () => {
            const { Interjection } = PartsOfSpeech;
            const interjection = new Interjection('hey');

            expect(interjection).to.have.property('types');
            expect(interjection).to.have.property('wordCategories');
        });
    });
});

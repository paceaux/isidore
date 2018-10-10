const chai = require('chai');

const { expect } = chai;
const grammar = require('..');

const { Dictionaries } = grammar;

describe('you have dictionaries', () => {
    it('should have at least english', () => {
        expect(Dictionaries).to.have.property('En');
    });
});

describe('you have stuff in the English dictionary', () => {

    it('should have some descriptive adjectives', () => {
        expect(Dictionaries).to.have.property('En');
        const { En } = Dictionaries;

        expect(En).to.have.property('Adjectives');
    });

    it('should have some adverbs', () => {
        expect(Dictionaries).to.have.property('En');
        const { En } = Dictionaries;

        expect(En).to.have.property('Adverbs');
    });

    it('should have some conjunctions', () => {
        expect(Dictionaries).to.have.property('En');
        const { En } = Dictionaries;

        expect(En).to.have.property('Conjunctions');
    });

    it('should have some interjections', () => {
        expect(Dictionaries).to.have.property('En');
        const { En } = Dictionaries;

        expect(En).to.have.property('Interjections');
    });

    it('should have some nouns', () => {
        expect(Dictionaries).to.have.property('En');
        const { En } = Dictionaries;

        expect(En).to.have.property('Nouns');
    });

    it('should have some prepositions', () => {
        expect(Dictionaries).to.have.property('En');
        const { En } = Dictionaries;

        expect(En).to.have.property('Prepositions');
    });

    it('should have some pronouns', () => {
        expect(Dictionaries).to.have.property('En');
        const { En } = Dictionaries;

        expect(En).to.have.property('Pronouns');
    });

    it('should have some verbs', () => {
        expect(Dictionaries).to.have.property('En');
        const { En } = Dictionaries;

        expect(En).to.have.property('Verbs');
    });
});

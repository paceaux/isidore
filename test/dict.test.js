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

    describe('you should have details on nouns', () => {
        expect(Dictionaries).to.have.property('En');

        const { En } = Dictionaries;
        const { Nouns } = En;
        const commonNouns = Nouns.list.filter(noun => noun.subType === 'common');
        const uncountableNouns = Nouns.list.filter(noun => noun.subType === 'uncountable');
        const countableNouns = Nouns.list.filter(noun => noun.subType === 'countable');
        expect(En).to.have.property('Nouns');
        expect(Nouns).to.be.an('object');

        it('should have common nouns', () => {
            expect(commonNouns).to.have.have.length.at.least(10);
        });
        it('should have uncountable nouns', () => {
            expect(uncountableNouns).to.have.have.length.at.least(10);
        });
        it('should have countable nouns', () => {
            expect(countableNouns).to.have.have.length.at.least(10);
        });
    });

    describe('you have details on verbs', () => {
        expect(Dictionaries).to.have.property('En');

        const { En } = Dictionaries;
        const { Verbs } = En;
        const transitiveVerbs = Verbs.list.filter(verb => verb.type === 'transitive');
        const intransitiveVerbs = Verbs.list.filter(verb => verb.type === 'intransitive');

        it('should have transitive verbs', () => {
            expect(transitiveVerbs).to.have.have.length.at.least(10);
        });
        it('should have intransitive verbs', () => {
            expect(intransitiveVerbs).to.have.have.length.at.least(10);
        });
    });
});

describe('I can search words in the dictionaries', () => {
    it('I can find a noun in the noun dictionary', ()=> {
        const { En } = Dictionaries;
        const { Nouns } = En;
        const word = Nouns.findWord('accident');

        expect(word).to.be.an('object');
        expect(word).to.have.property('type');
    });
    it('I can find a noun in the noun dictionary even if it\'s plural', ()=> {
        const { En } = Dictionaries;
        const { Nouns } = En;
        const word = Nouns.findWord('accidents');

        expect(word).to.be.an('object');
        expect(word).to.have.property('type');
    });
    it('I can find a verb in the verb dictionary', ()=> {
        const { En } = Dictionaries;
        const { Verbs } = En;
        const word = Verbs.findWord('give');

        console.log(word);
        console.log(Verbs);

        expect(word).to.be.an('object');
        expect(word).to.have.property('type');
    });
});
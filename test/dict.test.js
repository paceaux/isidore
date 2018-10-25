const chai = require('chai');

const { expect } = chai;
const grammar = require('..');

const { Languages } = grammar;
const { En } = Languages;

describe('Searching individual dictionaries...', () => {
    it('can find a noun in the noun dictionary', () => {
        const { Nouns } = En.grammarDictionaries;
        const word = Nouns.findWord('accident');

        expect(word).to.be.an('object');
        expect(word).to.have.property('type');
    });
    it('can find a noun in the noun dictionary even if it\'s plural', () => {
        const { Nouns } = En.grammarDictionaries;
        const word = Nouns.findWord('accidents');

        expect(word).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word).to.have.property('type');
        expect(word.type).to.equal('enumerative');
        expect(word.subType).to.equal('countable');
    });
    it('can find a verb in the verb dictionary', () => {
        const { Verbs } = En.grammarDictionaries;
        const word = Verbs.findWord('give');

        expect(word).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word).to.have.property('type');
        expect(word.type).to.equal('transitive');
    });

    it('can find a preposition in the preposition dictionary', () => {
        const { Prepositions } = En.grammarDictionaries;
        const word = Prepositions.findWord('to');

        expect(word).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word).to.have.property('type');
        expect(word.type).to.equal('direction');

    });

    it('can find an adverb in the adverb dictionary', () => {
        const { Adverbs } = En.grammarDictionaries;
        const word = Adverbs.findWord('very');

        expect(word).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word).to.have.property('type');
    });

    it('can find a conjunction in the conjunction dictionary', () => {
        const { Conjunctions } = En.grammarDictionaries;
        const word = Conjunctions.findWord('and');

        expect(word).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word).to.have.property('type');
    });

    it('can find a correlating conjunction in the conjunction dictionary', () => {
        const { Conjunctions } = En.grammarDictionaries;
        const word = Conjunctions.findWord('nor');

        expect(word).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word).to.have.property('type');
    });

    it('can find an interjection in the interjection dictionary', () => {
        const { Interjections } = En.grammarDictionaries;
        const word = Interjections.findWord('nope');

        expect(word).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word).to.have.property('type');
    });

    it('can find an adjective in the adjective dictionary', () => {
        const { Adjectives } = En.grammarDictionaries;
        const word = Adjectives.findWord('new');

        expect(word).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word).to.have.property('type');
    });

    it('can find a pronoun in the pronoun dictionary', () => {
        const { Pronouns } = En.grammarDictionaries;
        const word = Pronouns.findWord('I');
        const word2 = Pronouns.findWord('myself');

        expect(word).to.be.an('object');
        expect(word2).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word).to.have.property('type');
    });
});

describe('Still searching in individual dictionaries...', () => {
    it('returns a string if it cannot find a noun in the noun dict', () => {
        const { Nouns } = En.grammarDictionaries;
        const word = Nouns.findWord('foo');

        expect(word).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word.partOfSpeech).to.equal(undefined);
    });
    it('returns a string if it cannot find a verb in the verb dict', () => {
        const { Verbs } = En.grammarDictionaries;
        const word = Verbs.findWord('foo');

        expect(word).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word.partOfSpeech).to.equal(undefined);
    });
    it('returns a string if it cannot find an adjective in the adjective dict', () => {
        const { Adjectives } = En.grammarDictionaries;
        const word = Adjectives.findWord('foo');

        expect(word).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word.partOfSpeech).to.equal(undefined);
    });
    it('returns a string if it cannot find an adverb in the adverb dict', () => {
        const { Adverbs } = En.grammarDictionaries;
        const word = Adverbs.findWord('foo');

        expect(word).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word.partOfSpeech).to.equal(undefined);
    });
    it('returns a string if it cannot find a conjunction in the conjunction dict', () => {
        const { Conjunctions } = En.grammarDictionaries;
        const word = Conjunctions.findWord('foo');

        expect(word).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word.partOfSpeech).to.equal(undefined);
    });
    it('returns a string if it cannot find a preposition in the preposition dict', () => {
        const { Prepositions } = En.grammarDictionaries;
        const word = Prepositions.findWord('foo');

        expect(word).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word.partOfSpeech).to.equal(undefined);
    });
    it('returns a string if it cannot find a pronoun in the pronoun dict', () => {
        const { Pronouns } = En.grammarDictionaries;
        const word = Pronouns.findWord('foo');

        expect(word).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word.partOfSpeech).to.equal(undefined);
    });
    it('returns a string if it cannot find an interjection in the interjection dict', () => {
        const { Interjections } = En.grammarDictionaries;
        const word = Interjections.findWord('foo');

        expect(word).to.be.an('object');
        expect(word).to.have.property('partOfSpeech');
        expect(word.partOfSpeech).to.equal(undefined);
    });
});

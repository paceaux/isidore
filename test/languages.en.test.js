const chai = require('chai');

const { expect } = chai;
const grammar = require('..');

const { Languages } = grammar;
const { En } = Languages;

describe('The English language...', () => {
    it('the english language has dictionaries', () => {
        expect(En.constructor.name).to.equal('Language');
        expect(En).to.have.property('grammarDictionaries');
        expect(En.grammarDictionaries).to.be.an('object');
    });
    describe('has eight parts of speech', () => {
        it('has an adjective dictionary', () => {
            expect(En.grammarDictionaries).to.have.property('Adjectives');
        });

        it('has an adverb dictionary', () => {
            expect(En.grammarDictionaries).to.have.property('Adverbs');
        });

        it('has a conjunction dictionary', () => {
            expect(En.grammarDictionaries).to.have.property('Conjunctions');
        });

        it('has an interjection dictionary', () => {
            expect(En.grammarDictionaries).to.have.property('Interjections');
        });

        it('has a noun dictionary', () => {
            expect(En.grammarDictionaries).to.have.property('Nouns');
        });

        it('has a preposition dictionary', () => {
            expect(En.grammarDictionaries).to.have.property('Prepositions');
        });

        it('has a pronoun dictionary', () => {
            expect(En.grammarDictionaries).to.have.property('Pronouns');
        });

        it('has a verb dictionary', () => {
            expect(En.grammarDictionaries).to.have.property('Verbs');
        });
    });
    describe('can search for a word...', () => {
        it('can return a part of speech', () => {
            const words = En.findWord('my');
            const [word] = words;
            expect(words).to.be.an('array');
            expect(word).to.have.property('word');
            expect(word.partOfSpeech).to.equal('adjective');
            expect(word.type).to.equal('possessive');
        });
        it('can return a generic word', () => {
            const words = En.findWord('foo');
            const [word] = words;

            expect(words).to.be.an('array');
            expect(word).to.have.property('word');
            expect(word.partOfSpeech).to.equal(undefined);
            expect(word.type).to.equal(undefined);
        });
    });
    describe('contains thoroughly defined dictionaries...  ', () => {
        describe('The noun dictionary... ', () => {
            const { Nouns } = En.grammarDictionaries;
            const commonNouns = Nouns.list.filter(noun => noun.subType === 'common');
            const uncountableNouns = Nouns.list.filter(noun => noun.subType === 'uncountable');
            const countableNouns = Nouns.list.filter(noun => noun.subType === 'countable');
            expect(En.grammarDictionaries).to.have.property('Nouns');
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
            const { Verbs } = En.grammarDictionaries;
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
});

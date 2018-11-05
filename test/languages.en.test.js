const chai = require('chai');

const { expect } = chai;
const isidore = require('..');

const { Languages } = isidore;
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

            it('has some noun inflections', () => {
                expect(Nouns).to.have.property('inflections');
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

    describe('can handle inflections on nouns', () => {
        const { Nouns } = En.grammarDictionaries;

        it('has plural and possessive inflections', () => {
            const { inflections } = Nouns;
            expect(inflections).to.have.property('plural');
            expect(inflections).to.have.property('possessive');
        });

        describe('has a plural inflection', () => {
            it('has has a fix, and mutations, for plural inflections', () => {
                const { inflections } = Nouns;
                const { plural } = inflections;

                expect(plural).to.have.property('fix');
                expect(plural).to.have.property('regularMutations');
                expect(plural).to.have.property('irregularMutations');
            });

            it('singular words do not show inflections', () => {
                const inflections = Nouns.guessInflection('city');

                expect(inflections).to.equal(undefined);
            });

            it('can get existing infections of an irregular noun', () => {
                const inflections = Nouns.guessInflection('cities');

                expect(inflections).to.be.an('object');
            });
            it('can get existing infections of a regular noun', () => {
                const inflections = Nouns.guessInflection('years');

                expect(inflections).to.be.an('object');
            });
            it('can remove plural inflections of an irregular noun', () => {
                const inflections = Nouns.guessInflection('cities');
                const unInflected = Nouns.removeInflection('cities', inflections);

                expect(inflections).to.be.an('object');
                expect(unInflected).to.equal('city');
            });
            it('can remove plural inflections of regular noun', () => {
                const inflections = Nouns.guessInflection('years');
                const unInflected = Nouns.removeInflection('years', inflections);

                expect(inflections).to.be.an('object');
                expect(unInflected).to.equal('year');
            });
            it('can find an irregularly inflected plural noun', () => {
                const word = Nouns.findWord('cities');

                expect(word).to.be.an('object');
                expect(word).to.have.property('partOfSpeech');
                expect(word.partOfSpeech).to.equal('noun');
            });
            it('puts inflection info on irregularly inflected plural nouns', () => {
                const word = Nouns.findWord('cities');

                expect(word).to.have.property('inflection');
                expect(word).to.have.property('inflectedWord');
                expect(word.inflectedWord).to.equal('cities');
            });

            it('can find an a regularly inflected plural noun', () => {
                const word = Nouns.findWord('years');

                expect(word).to.be.an('object');
                expect(word).to.have.property('partOfSpeech');
                expect(word.partOfSpeech).to.equal('noun');
            });

            it('puts inflection info on regularly inflected plural nouns', () => {
                const word = Nouns.findWord('years');

                expect(word).to.have.property('inflection');
                expect(word).to.have.property('inflectedWord');
                expect(word.inflectedWord).to.equal('years');
            });
        });

        describe('has a possessive inflection', () => {
            it('has has a fix, and mutations, for possessive inflections', () => {
                const { inflections } = Nouns;
                const { possessive } = inflections;

                expect(possessive).to.have.property('fix');
                expect(possessive).to.have.property('regularMutations');
            });
            it('non-possessive words do not show inflections', () => {
                const inflections = Nouns.guessInflection('city');

                expect(inflections).to.equal(undefined);
            });

            it('can get existing infections of a regular noun', () => {
                const inflections = Nouns.guessInflection("year's");

                console.log(inflections);
                expect(inflections).to.be.an('object');
                expect(inflections.inflectionName).to.equal('possessive');
            });
        });
    });
});

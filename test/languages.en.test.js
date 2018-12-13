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

        describe('has a plural inflections', () => {
            it('has has a fix, and mutation, for plural inflections', () => {
                const { inflections } = Nouns;
                const { plural } = inflections;

                expect(plural).to.have.property('fix');
                expect(plural).to.have.property('regularMutations');
                expect(plural).to.have.property('irregularMutations');
            });

            it('singular words do not show inflection', () => {
                const inflection = Nouns.guessInflection('city');

                expect(inflection).to.equal(undefined);
            });

            it('can get existing inflection of an irregular noun', () => {
                const inflection = Nouns.guessInflection('cities');

                expect(inflection).to.be.an('object');
            });
            it('can get existing inflection of a regular noun', () => {
                const inflection = Nouns.guessInflection('years');

                expect(inflection).to.be.an('object');
            });
            it('can identify cities as irregular', () => {
                const inflection = Nouns.guessInflection('cities');

                expect(inflection).to.be.an('object');
                expect(inflection.type).to.equal('irregularMutation');
            });
            it('can remove plural inflection of an irregular noun', () => {
                const inflection = Nouns.guessInflection('cities');

                const unInflected = Nouns.removeInflection('cities', inflection);

                expect(inflection).to.be.an('object');
                expect(unInflected).to.equal('city');
            });
            it('can remove plural inflection of regular noun', () => {
                const inflection = Nouns.guessInflection('years');
                const unInflected = Nouns.removeInflection('years', inflection);

                expect(inflection).to.be.an('object');
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
            it('non-possessive words do not show inflection', () => {
                const inflection = Nouns.guessInflection('city');

                expect(inflection).to.equal(undefined);
            });

            it('can guess existing inflection of a regular possessive noun', () => {
                const inflection = Nouns.guessInflection("year's");

                expect(inflection).to.be.an('object');
                expect(inflection.inflectionName).to.equal('possessive');
            });
            it('can guess existing inflection of a regular plural possessive noun', () => {
                const inflection = Nouns.guessInflection("years'");

                expect(inflection).to.be.an('object');
                expect(inflection.inflectionName).to.equal('pluralpossessive');
            });
            it('can uninflect inflection of a regular plural possessive noun', () => {
                const inflection = Nouns.guessInflection("years'");
                const uninflection = Nouns.removeInflection("years'", inflection);

                expect(inflection).to.be.an('object');
                expect(inflection.inflectionName).to.equal('pluralpossessive');
                expect(uninflection).to.equal('year');
            });
            it('will not get thrown off by double-s', () => {
                const inflection = Nouns.guessInflection('happiness');

                expect(inflection).to.equal(undefined);
            });

        });
    });

    describe('can handle conjugations on verbs', () => {
        const { Verbs } = En.grammarDictionaries;

        it('has conjugations', () => {
            const { conjugations } = Verbs;
            expect(conjugations).to.be.an('object');
        });

        it('has moods, tenses, aspects in the conjugations', () => {
            const { conjugations } = Verbs;

            expect(conjugations.moodNames).to.be.an('array');
            expect(conjugations.tenseNames).to.be.an('array');
            expect(conjugations.aspectNames).to.be.an('array');
        });

        it.skip('has tenses in the conjugations', () => {
            const { conjugations } = Verbs;

            expect(conjugations.tenses).to.be.an('object');
            expect(conjugations).to.have.property('past');
            expect(conjugations).to.have.property('pastParticiple');
            expect(conjugations).to.have.property('present');
            expect(conjugations).to.have.property('presentParticiple');
        });

        it.skip('can get the conjugations of "plays" ', () => {
            const conjugations = Verbs.getConjugations('plays');

            expect(conjugations).to.be.an('array');
        });

        it.skip('has tense and pronoun when it guesses a conjugation', () => {
            const conjugation = Verbs.guessConjugation('plays');

            expect(conjugation).to.be.an('object');
            expect(conjugation).to.have.property('tense');
            expect(conjugation).to.have.property('pronoun');
        });
        it.skip('can guess that "plays" gets a present simple tense and 3rd person pronoun', () => {
            const conjugation = Verbs.guessConjugation('plays');

            expect(conjugation).to.be.an('object');
            expect(conjugation.tense).to.equal('presentSimple');
            expect(conjugation.pronoun).to.be.an('object');
            expect(conjugation.pronoun).to.have.property('quantity');
            expect(conjugation.pronoun.quantity).to.equal('singular');
            expect(conjugation.pronoun.person).to.equal(3);
        });
    });
});

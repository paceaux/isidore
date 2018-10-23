const chai = require('chai');

const { expect } = chai;
const grammar = require('..');

const { PartsOfSpeech } = grammar;

describe('PartsOfSpeech...', () => {
    describe('includes adjectives and', () => {
        it('can create an adjective', () => {
            const { Adjective } = PartsOfSpeech;
            const word = new Adjective('new', 'qualitative');

            expect(word).to.be.an('object');
        });

        it('has "word" properties', () => {
            const { Adjective } = PartsOfSpeech;
            const word = new Adjective('tall', 'qualitative');

            expect(word).to.have.property('word');
            expect(word).to.have.property('type');
            expect(word).to.have.property('types');
            expect(word).to.have.property('partOfSpeech');
            expect(word.word).to.equal('tall');
            expect(word.type).to.equal('qualitative');
            expect(word.partOfSpeech).to.equal('adjective');
        });

        it('also has degrees', () => {
            const { Adjective } = PartsOfSpeech;
            const word = new Adjective('tall', 'qualitative');

            expect(word).to.have.property('degrees');
        });
    });

    describe('includes conjunctions and', () => {
        it('can create a conjunction', () => {
            const { Conjunction } = PartsOfSpeech;
            const word = new Conjunction('and');

            expect(word).to.be.an('object');
        });

        it('has "word" properties', () => {
            const { Conjunction } = PartsOfSpeech;
            const word = new Conjunction('and', 'coordinating');

            expect(word).to.have.property('word');
            expect(word).to.have.property('type');
            expect(word).to.have.property('types');
            expect(word).to.have.property('partOfSpeech');
            expect(word.word).to.equal('and');
            expect(word.type).to.equal('coordinating');
            expect(word.partOfSpeech).to.equal('conjunction');

        });
    });
    describe('includes pronouns and', () => {
        it('can create a pronoun', () => {
            const { Pronoun } = PartsOfSpeech;
            const word = new Pronoun('I');

            expect(word).to.be.an('object');
        });
        it('has "word" properties', () => {
            const { Pronoun } = PartsOfSpeech;
            const word = new Pronoun('I', 'subject');

            expect(word).to.have.property('word');
            expect(word).to.have.property('type');
            expect(word).to.have.property('types');
            expect(word).to.have.property('partOfSpeech');
            expect(word.word).to.equal('I');
            expect(word.type).to.equal('subject');
            expect(word.partOfSpeech).to.equal('pronoun');
        });

        it('also has pronoun properties', () => {
            const { Pronoun } = PartsOfSpeech;
            const word = new Pronoun('I', 'subject', 'animate', 'neuter', 1, 'singular');

            expect(word).to.have.property('quantities');
            expect(word).to.have.property('referents');
            expect(word).to.have.property('genders');
            expect(word).to.have.property('referent');
            expect(word).to.have.property('gender');
            expect(word).to.have.property('person');
            expect(word).to.have.property('quantity');

            expect(word.referent).to.equal('animate');
            expect(word.gender).to.equal('neuter');
            expect(word.person).to.equal(1);
            expect(word.quantity).to.equal('singular');
        });
    });

    describe('includes adverbs and', () => {
        it('can create an adverb', () => {
            const { Adverb } = PartsOfSpeech;
            const word = new Adverb('happily');

            expect(word).to.be.an('object');
        });
        it('has "word" properties', () => {
            const { Adverb } = PartsOfSpeech;
            const word = new Adverb('happily', 'manner');

            expect(word).to.have.property('word');
            expect(word).to.have.property('type');
            expect(word).to.have.property('types');
            expect(word).to.have.property('partOfSpeech');
            expect(word.word).to.equal('happily');
            expect(word.type).to.equal('manner');
            expect(word.partOfSpeech).to.equal('adverb');
        });
    });

    describe('include prepositions and', () => {
        it('can create a preposition', () => {
            const { Preposition } = PartsOfSpeech;
            const word = new Preposition('to');

            expect(word).to.be.an('object');
        });
        it('has "word" properties', () => {
            const { Preposition } = PartsOfSpeech;
            const word = new Preposition('to', 'direction');

            expect(word).to.have.property('word');
            expect(word).to.have.property('type');
            expect(word).to.have.property('types');
            expect(word).to.have.property('partOfSpeech');
            expect(word.word).to.equal('to');
            expect(word.type).to.equal('direction');
            expect(word.partOfSpeech).to.equal('preposition');
        });
    });

    describe('includes verbs and', () => {
        it('can create a verb', () => {
            const { Verb } = PartsOfSpeech;
            const word = new Verb('run');

            expect(word).to.be.an('object');
        });

        it('has "word" properties', () => {
            const { Verb } = PartsOfSpeech;
            const word = new Verb('run', 'intransitive');

            expect(word).to.have.property('word');
            expect(word).to.have.property('type');
            expect(word).to.have.property('types');
            expect(word).to.have.property('partOfSpeech');
            expect(word.word).to.equal('run');
            expect(word.type).to.equal('intransitive');
            expect(word.partOfSpeech).to.equal('verb');
        });
        it('has verb properties', () => {
            const { Verb } = PartsOfSpeech;
            const word = new Verb('run', 'intransitive');

            expect(word).to.have.property('valence');
            expect(word.valence).to.equal(1);
        });
    });

    describe('includes nouns and', () => {
        it('can create a noun', () => {
            const { Noun } = PartsOfSpeech;
            const word = new Noun('life');

            expect(word).to.be.an('object');
        });
        it('has "word" properties', () => {
            const { Noun } = PartsOfSpeech;
            const word = new Noun('coffee', 'enumerative');

            expect(word).to.have.property('word');
            expect(word).to.have.property('type');
            expect(word).to.have.property('types');
            expect(word).to.have.property('partOfSpeech');
            expect(word.word).to.equal('coffee');
            expect(word.type).to.equal('enumerative');
            expect(word.partOfSpeech).to.equal('noun');
        });
        it('has noun properties', () => {
            const { Noun } = PartsOfSpeech;
            const word = new Noun('coffee', 'enumerative', 'uncountable');

            expect(word).to.have.property('subType');
            expect(word.subType).to.equal('uncountable');
        });
    });

    describe('includes interjections and', () => {
        it('can create an interjection', () => {
            const { Interjection } = PartsOfSpeech;
            const word = new Interjection('hey');

            expect(word).to.be.an('object');
        });
        it('has "word" properties', () => {
            const { Interjection } = PartsOfSpeech;
            const word = new Interjection('hey', 'volitive');

            expect(word).to.have.property('word');
            expect(word).to.have.property('type');
            expect(word).to.have.property('types');
            expect(word).to.have.property('partOfSpeech');
            expect(word.word).to.equal('hey');
            expect(word.type).to.equal('volitive');
            expect(word.partOfSpeech).to.equal('interjection');
        });

        it('has interjection properties', () => {
            const { Interjection } = PartsOfSpeech;
            const word = new Interjection('hey', 'volitive', 'primary');

            expect(word).to.have.property('wordCategories');
            expect(word).to.have.property('wordCategory');
            expect(word.wordCategory).to.equal('primary');
        });
    });
});

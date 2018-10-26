const chai = require('chai');

const { expect } = chai;
const isidore = require('..');

const { Sentence } = isidore;

describe('Sentence parsing...', () => {
    it('can split words into an array of text strings', () => {
        const sentence = new Sentence('This is a sentence.');

        expect(sentence).to.have.property('rawWordList');
        expect(sentence.rawWordList).to.be.an('array');
        expect(sentence.rawWordList[0]).to.be.a('string');
    });

    it('can split words into an array of Words', () => {
        const sentence = new Sentence('Give me that car.');
        const { wordList } = sentence;
        const [firstWord] = wordList;

        expect(sentence).to.have.property('wordList');
        expect(wordList).to.be.an('array');
        expect(firstWord.partOfSpeech).to.not.equal(undefined);
        expect(firstWord.type).to.not.equal(undefined);
    });
    it('can split words into correct parts of speech', () => {
        const sentence = new Sentence('Give me that car.');
        const { wordList } = sentence;
        const [give, me, that, car] = wordList;

        expect(sentence).to.have.property('wordList');
        expect(give.partOfSpeech).to.equal('verb');
        expect(me.partOfSpeech).to.equal('pronoun');
        expect(that.partOfSpeech).to.equal('adjective');
        expect(car.partOfSpeech).to.equal('noun');
    });
    it('can split words into correct parts of speech', () => {
        const sentence = new Sentence('Give me that car.');
        const { wordList } = sentence;
        const [give, me, that, car] = wordList;

        expect(sentence).to.have.property('wordList');
        expect(give.partOfSpeech).to.equal('verb');
        expect(me.partOfSpeech).to.equal('pronoun');
        expect(that.partOfSpeech).to.equal('adjective');
        expect(car.partOfSpeech).to.equal('noun');
    });
});

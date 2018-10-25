const chai = require('chai');

const { expect } = chai;
const grammar = require('..');

const { Sentence } = grammar;

describe('The Sentence model', () => {
    it('has text, type, and language', () => {
        const sentence = new Sentence('This is a sentence.');

        expect(sentence).to.haveOwnProperty('type');
        expect(sentence).to.haveOwnProperty('text');
        expect(sentence).to.haveOwnProperty('language');
    });

    it('has types', () => {
        const sentence = new Sentence('This is a sentence.');

        expect(sentence).to.have.property('types');
    });

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
});

const chai = require('chai');

const { expect } = chai;
const grammar = require('..');

const { Sentence } = grammar;

describe('you can take a sentence and parse it', () => {
    it('should split words into an array', () => {
        const sentence = new Sentence('We give food to them.');

        expect(sentence).to.have.property('wordList');
        expect(sentence.wordList).to.be.an('array');
    });
});
describe('it can recognize sentence types', () => {
    it('should recognized a declarative sentence', () => {
        const sentence = new Sentence('We give food to them.');

        expect(sentence.type).to.equal('declarative');
    });
    it('should recognize an interrogative sentence', () => {
        const sentence = new Sentence('We give food to them?');

        expect(sentence.type).to.equal('interrogative');
    });
    it('should recognize an exclamatory sentence', () => {
        const sentence = new Sentence('We give food to them!');

        expect(sentence.type).to.equal('exclamatory');
    });
    it('should recognize an interrobanged sentence', () => {
        const sentence1 = new Sentence('We give food to them!?');
        const sentence2 = new Sentence('We give food to them?!');
        const sentence3 = new Sentence('We give food to them‽');


        expect(sentence1.type).to.equal('exclamatory+interrogative');
        expect(sentence2.type).to.equal('exclamatory+interrogative');
        expect(sentence3.type).to.equal('exclamatory+interrogative');
    });
});

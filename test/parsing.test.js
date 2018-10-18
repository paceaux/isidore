const chai = require('chai');

const { expect } = chai;
const grammar = require('..');

const { Sentence } = grammar;

describe('Parsing a sentence...', () => {
    it('can split words into an array', () => {
        const sentence = new Sentence('We give food to them.');

        expect(sentence).to.have.property('wordList');
        expect(sentence.wordList).to.be.an('array');
    });
});
describe('Recognizing sentence types...', () => {
    it('can recognize a declarative sentence', () => {
        const sentence = new Sentence('We give food to them.');

        expect(sentence.type).to.equal('declarative');
    });
    it('can recognize an interrogative sentence', () => {
        const sentence = new Sentence('We give food to them?');

        expect(sentence.type).to.equal('interrogative');
    });
    it('can recognize an exclamatory sentence', () => {
        const sentence = new Sentence('We give food to them!');

        expect(sentence.type).to.equal('exclamatory');
    });
    it('can recognize an interrobanged sentence', () => {
        const sentence1 = new Sentence('We give food to them!?');
        const sentence2 = new Sentence('We give food to them?!');
        const sentence3 = new Sentence('We give food to them‽');


        expect(sentence1.type).to.equal('exclamatory+interrogative');
        expect(sentence2.type).to.equal('exclamatory+interrogative');
        expect(sentence3.type).to.equal('exclamatory+interrogative');
    });
});

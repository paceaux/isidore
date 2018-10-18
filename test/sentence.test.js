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

    it('can split words into an array', () => {
        const sentence = new Sentence('This is a sentence.');

        expect(sentence).to.have.property('wordList');
        expect(sentence.wordList).to.be.an('array');
    });
});

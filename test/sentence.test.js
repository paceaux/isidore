const chai = require('chai');

const { expect } = chai;
const grammar = require('..');

const { Sentence } = grammar;

describe('you can create sentences', () => {
    it('should have text, type, and language', () => {
        const sentence = new Sentence('This is a sentence.');

        expect(sentence).to.haveOwnProperty('type');
        expect(sentence).to.haveOwnProperty('text');
        expect(sentence).to.haveOwnProperty('language');
    });

    it('should have types', () => {
        const sentence = new Sentence('This is a sentence.');

        expect(sentence).to.have.property('types');
    });

    it('should split words into an array', () => {
        const sentence = new Sentence('This is a sentence.');

        expect(sentence).to.have.property('wordList');
        expect(sentence.wordList).to.be.an('array');
    });
});

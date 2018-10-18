const chai = require('chai');

const { expect } = chai;
const grammar = require('..');


describe('Grammar...', () => {
    it('has a grammar object', () => {
        expect(grammar).to.be.an('object');
    });

    it('has PartsOfSpeech', () => {
        expect(grammar).to.haveOwnProperty('PartsOfSpeech');
    });

    it('has an adjective', () => {
        expect(grammar).to.haveOwnProperty('PartsOfSpeech');
        expect(grammar.PartsOfSpeech).to.haveOwnProperty('Adjective');
    });

    it('has a conjunction', () => {
        expect(grammar).to.haveOwnProperty('PartsOfSpeech');
        expect(grammar.PartsOfSpeech).to.haveOwnProperty('Conjunction');
    });

    it('has a pronoun', () => {
        expect(grammar).to.haveOwnProperty('PartsOfSpeech');
        expect(grammar.PartsOfSpeech).to.haveOwnProperty('Pronoun');
    });

    it('has a sentence', () => {
        expect(grammar).to.haveOwnProperty('Sentence');
    });

    it('has dictionaries', () => {
        expect(grammar).to.haveOwnProperty('Dictionaries');
    });
});

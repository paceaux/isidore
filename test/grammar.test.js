const chai = require('chai');

const { expect } = chai;
const grammar = require('..');


describe('you have some grammar', () => {
    it('should have a grammar object', () => {
        expect(grammar).to.be.an('object');
    });

    it('should have PartsOfSpeech', () => {
        expect(grammar).to.haveOwnProperty('PartsOfSpeech');
    });

    it('should have an adjective', () => {
        expect(grammar).to.haveOwnProperty('PartsOfSpeech');
        expect(grammar.PartsOfSpeech).to.haveOwnProperty('Adjective');
    });
    it('should have a conjunction', () => {
        expect(grammar).to.haveOwnProperty('PartsOfSpeech');
        expect(grammar.PartsOfSpeech).to.haveOwnProperty('Conjunction');
    });
    it('should have a pronoun', () => {
        expect(grammar).to.haveOwnProperty('PartsOfSpeech');
        expect(grammar.PartsOfSpeech).to.haveOwnProperty('Pronoun');
    });

    it('should have a sentence', () => {
        expect(grammar).to.haveOwnProperty('Sentence');
    });
});

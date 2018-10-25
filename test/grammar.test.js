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

    it('has Languages', () => {
        expect(grammar).to.haveOwnProperty('Languages');
    });
    it('has a Sentence', () => {
        expect(grammar).to.haveOwnProperty('Sentence');
    });
});

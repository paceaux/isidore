const chai = require('chai');

const { expect } = chai;
const isidore = require('..');


describe('Grammar...', () => {
    it('has a grammar object', () => {
        expect(isidore).to.be.an('object');
    });

    it('has PartsOfSpeech', () => {
        expect(isidore).to.haveOwnProperty('PartsOfSpeech');
    });

    it('has Languages', () => {
        expect(isidore).to.haveOwnProperty('Languages');
    });
    it('has a Sentence', () => {
        expect(isidore).to.haveOwnProperty('Sentence');
    });
});

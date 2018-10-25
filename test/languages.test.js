const chai = require('chai');

const { expect } = chai;
const grammar = require('../dist/grammar.cjs');

const { Languages } = grammar;


describe('There are Languages', () => {
    it('There is an English dictionary', () => {
        expect(Languages).to.have.property('En');
    });

    it('the english language has dictionaries', () => {
        const { En } = Languages;
        expect(En.constructor.name).to.equal('Language');
        expect(En).to.have.property('grammarDictionaries');
        expect(En.grammarDictionaries).to.be.an('object');
    });
});


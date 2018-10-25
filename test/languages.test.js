const chai = require('chai');

const { expect } = chai;
const grammar = require('../dist/grammar.cjs');

const { Languages } = grammar;


describe('There are Languages', () => {
    it('There is an English dictionary', () => {
        expect(Languages).to.have.property('En');
    });
});

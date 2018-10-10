const chai = require('chai');

const { expect } = chai;
const grammar = require('..');

const { Dictionaries } = grammar;

describe('you have dictionaries', () => {
    it('should have at least english', () => {
        expect(Dictionaries).to.have.property('En');
    });
});

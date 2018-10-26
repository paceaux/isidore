const chai = require('chai');

const { expect } = chai;
const isidore = require('..');

const { Languages } = isidore;


describe('There are Languages', () => {
    it('There is an English dictionary', () => {
        expect(Languages).to.have.property('En');
    });
});

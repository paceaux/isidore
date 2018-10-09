const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const grammar = require('..');
const { PartsOfSpeech } = grammar;



describe('you have some grammar', ()=> {
    console.log(grammar);
    it('should have a grammar object', ()=> {
        expect(grammar).to.be.an('object');
    });

    it('should have PartsOfSpeech', ()=> {
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
});

describe('you can create words', () => {

    describe('you can do stuff with adjectives', () => {
        it('should create an adjective',  ()=> {
            const { Adjective } = PartsOfSpeech;
            const adj = new Adjective('tall', 'Descriptive');

            expect(adj).to.haveOwnProperty('word');
        });

        it ('should have types and degrees',  () => {
            const { Adjective } = PartsOfSpeech;
            const adj = new Adjective('tall', 'Descriptive');

            expect(adj).to.have.property('types');
            expect(adj).to.have.property('degrees');
        })
    });

    describe('you can do stuff with conjunctions', () => {
        it('should create a conjunction', () => {
            const { Conjunction } = PartsOfSpeech;
            const conj = new Conjunction('and');

            expect(conj).to.have.ownProperty('word');
        });

        it('should have types', () => {
            const { Conjunction } = PartsOfSpeech;
            const conj = new Conjunction('and');

            expect(conj).to.have.property('types');
        });
    });

});

const chai = require('chai');

const { expect } = chai;
const isidore = require('..');

const { Languages, Sentence } = isidore;
const { En } = Languages;

describe('=====DEBUGGING =====', () => {
    it('can split words into correct parts of speech', () => {
        const sentence = new Sentence('Give me that car.');
        const { wordList } = sentence;
        const [give, me, that, car] = wordList;

        console.log(sentence);
        expect(sentence).to.have.property('wordList');
        expect(give.partOfSpeech).to.equal('verb');
        expect(me.partOfSpeech).to.equal('pronoun');
        expect(that.partOfSpeech).to.equal('adjective');
        expect(car.partOfSpeech).to.equal('noun');
    });
});

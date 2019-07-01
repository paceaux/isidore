const chai = require('chai');

const { expect } = chai;
const isidore = require('..');

const { Languages, Sentence } = isidore;

describe('There are Languages', () => {
    it('There is an English dictionary', () => {
        expect(Languages).to.have.property('En');
    });
    it('the English language has a full name ', () => {
        expect(Languages.En).to.have.property('languageName');
        expect(Languages.En.languageName).to.equal('English');
        console.log(Languages.En);
    });
});

describe('making a language...', () => {
    it('can get a proper language name on national varieties', () => {
        const EnglishLang = Languages.En;
        EnglishLang.language = 'en-ie';
        expect(EnglishLang.languageName).to.equal('English (Ireland)');
    });
});

describe('A sentence\'s language...', () => {
    it('can be set as en', () => {
        const sentence = new Sentence({ text: 'This is a sentence.', language: 'en' });

        expect(sentence).to.haveOwnProperty('type');
        expect(sentence).to.haveOwnProperty('text');
        expect(sentence).to.haveOwnProperty('language');
    });
    it('can be set as EN', () => {
        const sentence = new Sentence({ text: 'This is a sentence.', language: 'EN' });

        expect(sentence).to.haveOwnProperty('type');
        expect(sentence).to.haveOwnProperty('text');
        expect(sentence).to.haveOwnProperty('language');
    });
    it('can be set as En', () => {
        const sentence = new Sentence({ text: 'This is a sentence.', language: 'EN' });

        expect(sentence).to.haveOwnProperty('type');
        expect(sentence).to.haveOwnProperty('text');
        expect(sentence).to.haveOwnProperty('language');
    });
    it('can be set as en-us', () => {
        const sentence = new Sentence({ text: 'This is a sentence.', language: 'EN' });

        expect(sentence).to.haveOwnProperty('type');
        expect(sentence).to.haveOwnProperty('text');
        expect(sentence).to.haveOwnProperty('language');
    });
});

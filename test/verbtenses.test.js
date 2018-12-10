
const chai = require('chai');

const { expect } = chai;
const isidore = require('..');

const { VerbTenses, VerbTense } = isidore;


describe('The verb tense...', () => {
    it('...is an object with a name', () => {
        const verbTense = new VerbTense({ mood: 'indicative', tense: 'present', aspect: 'simple' });

        expect(verbTense).to.be.an('object');
        expect(verbTense).to.have.property('name');
        expect(verbTense.name).to.equal('indicative:present:simple');
    });
    it('...can have its name changed automagically if a property changes', () => {
        const verbTense = new VerbTense({ mood: 'indicative', tense: 'present', aspect: 'simple' });

        expect(verbTense).to.be.an('object');
        expect(verbTense).to.have.property('name');
        verbTense.tense = 'past';
        verbTense.aspect = 'perfect';

        expect(verbTense.name).to.equal('indicative:past:perfect');
    });

    it('...will be infinitive if nothing else is there', () => {
        const verbTense = new VerbTense();
        const { mood, tense, aspect } = verbTense;
        expect(mood).to.equal('infinitive');
        expect(tense).to.equal(undefined);
        expect(aspect).to.equal(undefined);
    });
});

describe('Verb Tenses', () => {
    const verbAspects = ['simple', 'continuous', 'perfect', 'perfectContinuous'];
    const verbTenses = ['past', 'present', 'future'];
    const verbMoods = ['indicative', 'imperative', 'subjunctive'];

    it('generates just moods if it only has moods', () => {
        const langTenses = new VerbTenses(verbMoods);

        console.log(langTenses.verbMap);
        expect(langTenses).to.be.an('object');
        expect(langTenses.verbMap).to.be.a('map');
        expect(langTenses.verbMap.size).to.equal(3);
    });

    it.skip('can generate a verbTenses map', () => {
        const langTenses = new VerbTenses(verbMoods, verbTenses, verbAspects);

        expect(langTenses).to.be.an('object');
        expect(langTenses.verbMap).to.be.a('map');
    });

    it.skip('has indicative:past:simple, and subjunctive:future:perfectContinuous in the map', () => {
        const langTenses = new VerbTenses(verbMoods, verbTenses, verbAspects);

        expect(langTenses.verbMap.has('indicative:past:simple')).to.equal(true);
        expect(langTenses.verbMap.has('subjunctive:future:perfectContinuous')).to.equal(true);
    });

    it.skip('has a verb tree', () => {
        const langTenses = new VerbTenses(verbMoods, verbTenses, verbAspects);
        const { verbTree } = langTenses;

        expect(verbTree).to.be.an('object');
    });

    it.skip('can get a tense out of the verb tree', () => {
        const langTenses = new VerbTenses(verbMoods, verbTenses, verbAspects);
        const { verbTree } = langTenses;
        const { indicative } = verbTree;
        const { future } = indicative;
        const { perfect } = future;
        expect(perfect).to.be.an('object');
    });
});

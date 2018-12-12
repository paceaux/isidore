
const chai = require('chai');

const { expect } = chai;
const isidore = require('..');

const { VerbConjugations, VerbConjugation } = isidore;


describe('The verb tense...', () => {
    it('...is an object with a name', () => {
        const verbConjugation = new VerbConjugation({ mood: 'indicative', tense: 'present', aspect: 'simple' });

        expect(verbConjugation).to.be.an('object');
        expect(verbConjugation).to.have.property('name');
        expect(verbConjugation.name).to.equal('indicative:present:simple');
    });
    it('...can have its name changed automagically if a property changes', () => {
        const verbConjugation = new VerbConjugation({ mood: 'indicative', tense: 'present', aspect: 'simple' });

        expect(verbConjugation).to.be.an('object');
        expect(verbConjugation).to.have.property('name');
        verbConjugation.tense = 'past';
        verbConjugation.aspect = 'perfect';

        expect(verbConjugation.name).to.equal('indicative:past:perfect');
    });

    it('...will be infinitive if nothing else is there', () => {
        const verbConjugation = new VerbConjugation();
        const { mood, tense, aspect } = verbConjugation;
        expect(mood).to.equal('infinitive');
        expect(tense).to.equal(undefined);
        expect(aspect).to.equal(undefined);
    });
});

describe('Verb Tenses', () => {
    const verbAspects = ['simple', 'continuous', 'perfect', 'perfectContinuous'];
    const verbTenses = ['past', 'present', 'future'];
    const verbMoods = ['indicative', 'subjunctive'];

    it('will have an infinitive and an imperative conjugation built in', () => {
        const langTenses = new VerbConjugations(verbMoods, verbTenses, verbAspects);

        expect(langTenses.infinitive).to.be.an('object');
        expect(langTenses.imperative).to.be.an('object');
        expect(langTenses.infinitive.name).to.equal('infinitive');
        expect(langTenses.imperative.name).to.equal('imperative');
    });

    it('can generate a verbConjugations map from additional moods, tenses, aspects', () => {
        const langTenses = new VerbConjugations(verbMoods, verbTenses, verbAspects);

        expect(langTenses).to.be.an('object');
        expect(langTenses.verbMap).to.be.a('map');
        expect(langTenses.verbMap.size).to.equal(verbMoods.length * verbAspects.length * verbTenses.length + 2);
    });

    it('has indicative:past:simple, and subjunctive:future:perfectContinuous in the map', () => {
        const langTenses = new VerbConjugations(verbMoods, verbTenses, verbAspects);

        expect(langTenses.verbMap.has('indicative:past:simple')).to.equal(true);
        expect(langTenses.verbMap.has('subjunctive:future:perfectContinuous')).to.equal(true);
    });

    it('has a verb tree', () => {
        const langTenses = new VerbConjugations(verbMoods, verbTenses, verbAspects);
        const { verbTree } = langTenses;

        expect(verbTree).to.be.an('object');
    });

    it('can get a tense out of the verb tree', () => {
        const langTenses = new VerbConjugations(verbMoods, verbTenses, verbAspects);
        const { verbTree } = langTenses;
        const { indicative } = verbTree;
        const { future } = indicative;
        const { perfect } = future;
        expect(perfect).to.be.an('object');
    });
    it('can get imperative out of the tree', () => {
        const langTenses = new VerbConjugations(verbMoods, verbTenses, verbAspects);
        const { verbTree } = langTenses;
        const { imperative } = verbTree;
        expect(imperative).to.be.an('object');
    });
});

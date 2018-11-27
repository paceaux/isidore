
const chai = require('chai');

const { expect } = chai;
const isidore = require('..');

const { VerbTenses, VerbTense } = isidore;


describe('The verb tense...', () => {
    it('...is an object with a name', () => {
        const verbTense = new VerbTense('indicative', 'present', 'simple');

        expect(verbTense).to.be.an('object');
        expect(verbTense).to.have.property('name');
        expect(verbTense.name).to.equal('indicative:present:simple');
    });
    it('...can have its name changed automagically if a property changes', () => {
        const verbTense = new VerbTense('indicative', 'present', 'simple');

        expect(verbTense).to.be.an('object');
        expect(verbTense).to.have.property('name');
        verbTense.tense = 'past';
        verbTense.aspect = 'perfect';

        expect(verbTense.name).to.equal('indicative:past:perfect');
    });
});

describe('Verb Tenses', () => {
    const verbAspects = ['simple', 'continuous', 'perfect', 'perfectContinuous'];
    const verbTenses = ['past', 'present', 'future'];
    const verbMoods = ['indicative', 'imperative', 'subjunctive'];

    it('can generate a verbTenses map', () => {
        const langTenses = new VerbTenses(verbMoods, verbTenses, verbAspects);

        expect(langTenses).to.be.an('object');
        expect(langTenses.verbMap).to.be.a('map');
    });

    it('gets moods like indicative, imperative, subjunctive', () => {
        const langTenses = new VerbTenses(verbMoods, verbTenses, verbAspects);
        const { verbMap } = langTenses;

        expect(verbMap).to.be.a('map');
        expect(verbMap.get('indicative')).to.be.a('map');
        expect(verbMap.get('imperative')).to.be.a('map');
        expect(verbMap.get('subjunctive')).to.be.a('map');
    });
    it(' gets tenses like past, present, future from indicative', () => {
        const langTenses = new VerbTenses(verbMoods, verbTenses, verbAspects);

        const { verbMap } = langTenses;
        const indicative = verbMap.get('indicative');

        expect(indicative.get('past')).to.be.a('map');
        expect(indicative.get('present')).to.be.a('map');
        expect(indicative.get('future')).to.be.a('map');
    });

    it('gets the simple, continuous,perfect, perfectContinuous,  from the present indicative ', () => {
        const langTenses = new VerbTenses(verbMoods, verbTenses, verbAspects);

        const { verbMap } = langTenses;
        const indicative = verbMap.get('indicative');
        const present = indicative.get('present');

        expect(present.get('simple')).to.be.an('object');
        expect(present.get('continuous')).to.be.an('object');
        expect(present.get('perfect')).to.be.an('object');
        expect(present.get('perfectContinuous')).to.be.an('object');
    });
    it('can get a flattened map of available tenses', () => {
        const langTenses = new VerbTenses(verbMoods, verbTenses, verbAspects);
        const { flatMap } = langTenses;
        console.log(langTenses);

        expect(flatMap).to.be.a('map');
        expect(flatMap.size).to.equal(verbAspects.length * verbTenses.length * verbMoods.length);
    });
});

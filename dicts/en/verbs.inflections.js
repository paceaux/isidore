import VerbConjugations from '../../models/verbconjugations';

// First, establish the moods, aspects, and tenses
const verbAspects = ['simple', 'continuous', 'perfect', 'perfectContinuous'];
const verbTenses = ['past', 'present', 'future'];
const verbMoods = ['indicative', 'subjunctive'];

// next, create verbConjugations model:
const verbConjugations = new VerbConjugations(verbMoods, verbTenses, verbAspects);

// then, create inflections:
const edInflection = { mutation: 'ed', quantity: 'singular+plural', person: '1+2+3' };
const sInflection = { mutation: 's', quantity: 'singular', person: 3 };

// add the inflections to the conjugations
verbConjugations.addInflection('indicative:past:simple', edInflection);
verbConjugations.addInflection('indicative:present:simple', sInflection);

export default verbConjugations;

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
const esInflection = { mutation: 'es', quantity: 'singular', person: 3 };
const presContInflection = { mutation: 'ing', quantity: 'singular+plural', person: '1+2+3' };
const presContinuous1 = { auxiliary: 'am', quantity: 'singular', person: 1 };
const presContinuous2 = { auxiliary: 'are', quantity: 'singular+plural', person: '1+2+3' };
const presContinuous3 = { auxiliary: 'is', quantity: 'singular', person: 3 };
// add the inflections to the conjugations
verbConjugations.addInflection('indicative:past:simple', edInflection);
verbConjugations.addInflection('indicative:present:simple', sInflection);
verbConjugations.addInflection('indicative:present:simple', esInflection);
verbConjugations.addInflection('indicative:present:continuous', presContInflection);
verbConjugations.addAuxiliary('indicative:present:continuous', presContinuous1);
verbConjugations.addAuxiliary('indicative:present:continuous', presContinuous2);
verbConjugations.addAuxiliary('indicative:present:continuous', presContinuous3);

export default verbConjugations;

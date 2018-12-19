import VerbConjugations from '../../models/verbconjugations';

// First, establish the moods, aspects, and tenses
const verbAspects = ['simple', 'continuous', 'perfect', 'perfectContinuous'];
const verbTenses = ['past', 'present', 'future'];
const verbMoods = ['indicative', 'subjunctive'];

// next, create verbConjugations model:
const regularVerbConjugations = new VerbConjugations(verbMoods, verbTenses, verbAspects);
// then, create inflections:
const edInflection = { mutation: 'ed', quantity: 'singular+plural', person: '1+2+3' };
const iedInflection = { mutation: 'ied', quantity: 'singular+plural', person: '1+2+3' };
const sInflection = { mutation: 's', quantity: 'singular', person: 3 };
const esInflection = { mutation: 'es', quantity: 'singular', person: 3 };
const iesInflection = { mutation: 'ies', quantity: 'singular', person: 3 };
const presContInflection = { mutation: 'ing', quantity: 'singular+plural', person: '1+2+3' };
const presContinuous1 = { auxiliary: 'am', quantity: 'singular', person: 1 };
const presContinuous2 = { auxiliary: 'are', quantity: 'singular+plural', person: '1+2+3' };
const presContinuous3 = { auxiliary: 'is', quantity: 'singular', person: 3 };
// add the inflections to the conjugations
regularVerbConjugations.addInflection('indicative:past:simple', edInflection);
regularVerbConjugations.addInflection('indicative:past:simple', iedInflection);
regularVerbConjugations.addInflection('indicative:present:simple', sInflection);
regularVerbConjugations.addInflection('indicative:present:simple', esInflection);
regularVerbConjugations.addInflection('indicative:present:simple', iesInflection);
regularVerbConjugations.addInflection('indicative:present:continuous', presContInflection);
regularVerbConjugations.addAuxiliary('indicative:present:continuous', presContinuous1);
regularVerbConjugations.addAuxiliary('indicative:present:continuous', presContinuous2);
regularVerbConjugations.addAuxiliary('indicative:present:continuous', presContinuous3);

export { regularVerbConjugations };

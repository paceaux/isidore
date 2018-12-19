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

/* To Be */
const toBeConjugations = new VerbConjugations(verbMoods, verbTenses, verbAspects);
const am = { mutation: 'am', quantity: 'singular', person: 1 };
const are = { mutation: 'are', quantity: 'singular+plural', person: '1+2+3' };
const is = { mutation: 'is', quantity: 'singular', person: 3 };
const was = { mutation: 'was', quantity: 'singular', person: '1+3' };
const were = { mutation: 'were', quantity: 'singular+plural', person: '1+2+3' };

toBeConjugations.addInflection('indicative:present:simple', am);
toBeConjugations.addInflection('indicative:present:simple', are);
toBeConjugations.addInflection('indicative:present:simple', is);
toBeConjugations.addInflection('indicative:past:simple', was);
toBeConjugations.addInflection('indicative:past:simple', were);

/* To go */
const toGoConjugations = new VerbConjugations(verbMoods, verbTenses, verbAspects);
const went = { mutation: 'went', quantity: 'singular+plural', person: '1+2+3' };

toGoConjugations.addInflection('indicative:past:simple', went);

/* To say */
const toSayConjugations = new VerbConjugations(verbMoods, verbTenses, verbAspects);
const said = { mutation: 'said', quantity: 'singular+plural', person: '1+2+3' };

toSayConjugations.addInflection('indicative:past:simple', said);

export {
    regularVerbConjugations, toBeConjugations, toGoConjugations, toSayConjugations,
};

import getVerbConjugationName from '../helpers/models.verbtenses';

function VerbConjugation({ mood = 'infinitive', tense = '', aspect = '' } = {}) {
    this.mood = mood;
    if (tense) this.tense = tense;
    if (aspect) this.aspect = aspect;

    Object.defineProperty(this, 'name', {
        get() {
            return getVerbConjugationName(this.mood, this.tense, this.aspect);
        },
        enumerable: true,
    });
}


export default VerbConjugation;

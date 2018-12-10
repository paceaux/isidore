import getVerbTenseName from '../helpers/models.verbtenses';

function VerbTense({ mood = 'infinitive', tense = '', aspect = '' } = {}) {
    this.mood = mood;
    if (tense) this.tense = tense;
    if (aspect) this.aspect = aspect;

    Object.defineProperty(this, 'name', {
        get() {
            return getVerbTenseName(this.mood, this.tense, this.aspect);
        },
        enumerable: true,
    });
}


export default VerbTense;

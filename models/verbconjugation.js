import getVerbConjugationName from '../helpers/models.verbtenses';
/** Verb Conjugation:
 * Uses "named parameters"; a single object with property names:
 * @param  {string} mood='infinitive'
 * @param  {string} tense=' ' past, present, future
 * @param  {string} aspect=' ' simple, continous, perfect, perfectContinuous
 * @param  {string} fix='suffix' prefix, infix, suffix
 */
function VerbConjugation({
    mood = 'infinitive',
    tense = '',
    aspect = '',
    fix = 'suffix',
} = {}) {
    this.mood = mood;
    if (tense) this.tense = tense;
    if (aspect) this.aspect = aspect;
    this.fix = fix;
    this.inflections = new Map();
}

VerbConjugation.prototype = {
    get name() {
        return getVerbConjugationName(this.mood, this.tense, this.aspect);
    },
    addInflection({
        mutation,
        gender = 'neutral',
        quantity,
        person,
    } = {}) {
        this.inflections.set(mutation, { gender, quantity, person });
    },
};


export default VerbConjugation;
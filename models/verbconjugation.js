import getVerbConjugationName from '../helpers/models.verbtenses';
/** Verb Conjugation:
 * Uses "named parameters"; a single object with property names:
 * @param  {string} mood='infinitive'
 * @param  {string} tense=' ' past, present, future
 * @param  {string} aspect=' ' simple, continous, perfect, perfectContinuous
 * @param  {string} fix='suffix' prefix, infix, suffix
 * @member name string mood:tense:name
 * @member addInflection method, accepts object with {mutation, gender, quantity, person}
 * @member addAuxiliary method, accepts object with {auxiliary, gender, quantity, person}
 * @member findVerbData method, accepts an inflection as an argument, returns pronoun data
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
    this.auxiliaries = new Map();
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
        const pronounData = { gender, quantity, person };
        this.inflections.set(mutation, pronounData);
    },
    addAuxiliary({
        auxiliary,
        gender = 'neutral',
        quantity,
        person,
    } = {}) {
        const pronounData = { gender, quantity, person };
        this.auxiliaries.set(auxiliary, pronounData);
    },
    findVerbData(searchValue, searchMapName = 'inflections') {
        let result;
        const searchMap = this[searchMapName];

        if (searchMap && searchMap.has(searchValue)) {
            result = searchMap.get(searchValue);
        }
        return result;
    },
};


export default VerbConjugation;

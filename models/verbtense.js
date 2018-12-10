function getVerbTenseName(mood, tense = '', aspect = '') {
    return `${mood}:${tense}:${aspect}`;
}


function VerbTense({ mood = 'infinitive', tense = '', aspect = '' } = {}) {
    this.mood = mood;
    this.tense = tense;
    this.aspect = aspect;

    Object.defineProperty(this, 'name', {
        get() {
            return getVerbTenseName(this.mood, this.tense, this.aspect);
        },
        enumerable: true,
    });
}

export default VerbTense;

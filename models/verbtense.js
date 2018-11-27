
function VerbTense(mood, tense, aspect) {
    this.mood = mood;
    this.tense = tense;
    this.aspect = aspect;

    Object.defineProperty(this, 'name', {
        get() {
            return `${this.mood}:${this.tense}:${this.aspect}`;
        },
        enumerable: true,
    });
    return this;
}

export default VerbTense;

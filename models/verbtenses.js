import VerbTense from './verbtense';
import getVerbConjugationName from '../helpers/models.verbtenses';

function getTenseMap(moods, tenses, aspects) {
    const map = new Map();

    if (!moods && !tenses && !aspects) return map;
    moods.forEach(mood => {
        // infinitve, imperative, gerund
        if (tenses.length === 0) map.set(getVerbConjugationName(mood), new VerbTense({ mood }));
        tenses.forEach(tense => {
            if (aspects.length === 0) map.set(getVerbConjugationName(mood, tense));
            aspects.forEach(aspect => {
                map.set(getVerbConjugationName(mood, tense, aspect), new VerbTense(mood, tense, aspect));
            });
        });
    });

    return map;
}

function getTenseTreeFromMap(map) {
    const obj = {};

    map.forEach((val, key) => {
        const [mood, tense, aspect] = key.split(':');

        if (!obj[mood]) obj[mood] = {};
        if (!obj[mood][tense]) obj[mood][tense] = {};

        obj[mood][tense][aspect] = val;
    });

    return obj;
}

function VerbConjugations(moods, tenses = [], aspects = []) {
    this.moodNames = moods;
    this.tenseNames = tenses;
    this.aspectNames = aspects;

    Object.defineProperty(this, 'verbMap', {
        get() {
            return getTenseMap(this.moodNames, this.tenseNames, this.aspectNames);
        },
        enumerable: true,
    });

    Object.defineProperty(this, 'verbTree', {
        get() {
            return getTenseTreeFromMap(this.verbMap);
        },
        enumerable: true,
    });
}


export default VerbConjugations;

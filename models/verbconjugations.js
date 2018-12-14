import VerbConjugation from './verbconjugation';
import getVerbConjugationName from '../helpers/models.verbtenses';

function getTenseMap(moods, tenses, aspects) {
    const map = new Map();

    if (!moods && !tenses && !aspects) return map;
    moods.forEach(mood => {
        if (tenses.length === 0) {
            map.set(
                getVerbConjugationName(mood),
                new VerbConjugation({ mood }),
            );
        }
        tenses.forEach(tense => {
            if (aspects.length === 0) {
                map.set(
                    getVerbConjugationName(mood),
                    new VerbConjugation({ mood, tense }),
                );
            }
            aspects.forEach(aspect => {
                map.set(
                    getVerbConjugationName(mood, tense, aspect),
                    new VerbConjugation({ mood, tense, aspect }),
                );
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

        if (tense && aspect) obj[mood][tense][aspect] = val;
        if (!tense && !aspect) obj[mood] = val;
    });

    return obj;
}
/** VerbConjugations: a data structure for storing inflection information on a verb or set of verbs
 * @param  {array} moods 'indicative', 'subjunctive'
 * @param  {array} tenses=[] 'past', 'present', 'future'
 * @param  {array} aspects=[] 'simple', 'continuous', 'perfect', 'perfectContinuous'
 * @param  {boolean} isRegular=true
 */
function VerbConjugations(moods, tenses = [], aspects = [], isRegular = true) {
    this.infinitive = new VerbConjugation();
    this.imperative = new VerbConjugation({ mood: 'imperative' });
    this.moodNames = moods;
    this.tenseNames = tenses;
    this.aspectNames = aspects;
    this.isRegular = isRegular;

    const tenseMap = getTenseMap(this.moodNames, this.tenseNames, this.aspectNames);
    this.verbMap = new Map([...tenseMap, ['infinitive', this.infinitive], ['imperative', this.imperative]]);

    Object.defineProperty(this, 'verbTree', {
        get() {
            return getTenseTreeFromMap(this.verbMap);
        },
    });
}

VerbConjugations.prototype = {
    addInflection(tenseName, inflection) {
        if (this.verbMap.has(tenseName)) {
            this
                .verbMap
                .get(tenseName)
                .addInflection(inflection);
        }
    },
    addAuxiliary(tenseName, auxiliary) {
        if (this.verbMap.has(tenseName)) {
            this
                .verbMap
                .get(tenseName)
                .addAuxiliary(auxiliary);
        }
    },
    get inflections() {
        const result = new Map();

        this.verbMap.forEach((val, key) => {
            if (val.inflections.size > 0) {
                result.set(key, val);
            }
        });
        return result;
    },
    get auxiliaries() {
        const result = new Map();

        this.verbMap.forEach((val, key) => {
            if (val.auxiliaries.size > 0) {
                result.set(key, val);
            }
        });
        return result;
    },
    findInflection(mutation) {
        let result;

        this.verbMap.forEach((val, key) => {
            if (val.inflections.has(mutation)) {
                result = this.verbMap.get(key);
            }
        });
        return result;
    },
    findAuxiliary(auxiliary) {
        let result;

        this.verbMap.forEach((val, key) => {
            if (val.auxiliaries.has(auxiliary)) {
                result = this.verbMap.get(key);
            }
        });
        return result;
    },
};

export default VerbConjugations;

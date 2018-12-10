import VerbConjugation from './verbtense';
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
                    new VerbConjugation({ mood, tense, aspect })
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
    const infinitive = new VerbConjugation();
    const imperative = new VerbConjugation({ mood: 'imperative' });

    this.moodNames = moods;
    this.tenseNames = tenses;
    this.aspectNames = aspects;
    this.isRegular = isRegular;
    this.infinitive = infinitive;
    this.imperative = imperative;


    Object.defineProperty(this, 'verbMap', {
        get() {
            const tenseMap = getTenseMap(this.moodNames, this.tenseNames, this.aspectNames);
            return new Map([...tenseMap, ['infinitive', infinitive], ['imperative', imperative]]);
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

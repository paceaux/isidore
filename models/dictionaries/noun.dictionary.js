import Noun from '../partsOfSpeech/noun';
import Word from '../word';

/**
 * @param  {String} word word to search for
 * @returns {Object} inflection of a word: {inflectionName, fix, type, mutation}
 */
function getInflection(word) {
    if (!this.inflections) return {};

    const inflections = [];

    Object.keys(this.inflections).forEach(inflectionName => {
        const { fix, regularMutations, irregularMutations } = this.inflections[inflectionName];

        /* irregular mutations first, if something is irregular may  also be regular
         (at least in English, because most all english words end in s when possessive or plural)
         */
        if (irregularMutations) {
            irregularMutations.forEach(m => {
                let regexp = new RegExp('\\d');

                if (fix === 'suffix') regexp = new RegExp(`(${m.mutation})+\\b`);
                if (fix === 'prefix') regexp = new RegExp(`^(${m.mutation})+`);

                if (word.match(regexp)) {
                    const obj = {
                        inflectionName,
                        fix,
                        type: 'irregularMutation',
                        ...m,
                    };
                    inflections.push(obj);
                }
            });
        }

        if (inflections.length === 0 && regularMutations) {
            regularMutations.forEach(m => {
                let regexp = new RegExp('\\d');

                if (fix === 'suffix') regexp = new RegExp(`(${m})+\\b`);
                if (fix === 'prefix') regexp = new RegExp(`^(${m})+`);

                if (word.match(regexp)) {
                    const obj = {
                        inflectionName,
                        fix,
                        type: 'regularMutation',
                        mutation: m,
                    };
                    inflections.push(obj);
                }
            });
        }
    });

    return inflections[0];
}

function removeInflection(word, inflection) {
    const mutateOn = inflection.type === 'irregularMutation' ? inflection.mutateOn : '';

    return word.replace(inflection.mutation, mutateOn);
}

/**
 * @param  {String} word word to search for
 * @returns {Object} Noun if successful, Word if unsuccessful
 */
function findNoun(word) {
    let search = word;
    const inflection = this.guessInflection(word);
    if (inflection) {
        search = this.removeInflection(word, inflection);
    }
    const defaultFilter = obj => search.toLowerCase().startsWith(obj.noun.toLowerCase());

    const list = this.list.filter(defaultFilter);

    const typedList = list.map(nounObj => new Noun(nounObj.noun, nounObj.type, nounObj.subType, inflection));

    return typedList.length === 0 ? new Word(search) : typedList[0];
}
/** Noun Dictionary
 * @param  {Array} list Nouns with types and wordCategories
 * @param  {String} language two-letter abbreviation of language
 * @member {list} Array of typed Nouns
 * @member {language} String language for the dictionary
 * @method {findWord} searches for a word in the dictionary and returns a Noun or a Word
 */
function NounDictionary(list, language, inflections) {
    this.list = list.sort((a, b) => {
        if (a.noun < b.noun) return -1;
        if (a.noun > b.noun) return 1;
        return 0;
    });
    this.language = language;
    this.inflections = inflections;
    this.guessInflection = getInflection;
    this.removeInflection = removeInflection;
    this.findWord = findNoun;
}

export default NounDictionary;

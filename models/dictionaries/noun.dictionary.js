import Noun from '../partsOfSpeech/noun';
import Word from '../word';

/** Generates a regular expression
 * @param  {string} mutation
 * @param  {string} fix prefix, suffix, infix
 * @returns {RegExp} Regular expression for identifying a mutation
 */
function getMutationRegex(mutation, fix) {
    let regexp = new RegExp('\\d');

    if (fix === 'suffix') regexp = new RegExp(`${mutation}`);
    if (fix === 'prefix') regexp = new RegExp(`^(${mutation})`);

    return regexp;
}
/** Sets irregular and regular mutations to both be arrays of objects with regexes
 * @param  {object} inflections object containing individual inflections
 * @returns {object} Clone of inflections with regular and irregular being objects with regexes
 */
function getEnhancedInflections(inflections) {
    const clone = JSON.parse(JSON.stringify(inflections));
    const inflectionNames = Object.keys(inflections);

    inflectionNames.forEach(name => {
        const inflection = inflections[name];
        const { fix, regularMutations, irregularMutations } = inflection;

        if (irregularMutations) {
            const newIrregularMutations = inflection.irregularMutations.map(irregularMutation => {
                const regexString = irregularMutation.marker || irregularMutation.mutation;
                const regexp = getMutationRegex(regexString, fix);

                return Object.assign({ regexp }, irregularMutation);
            });
            clone[name].irregularMutations = newIrregularMutations;
        }

        if (regularMutations) {
            const newRegularMutations = regularMutations.map(regularMutation => {
                const regexString = regularMutation.marker || regularMutation.mutation;

                const regexp = getMutationRegex(regexString, fix);

                return Object.assign({ regexp }, regularMutation);
            });
            clone[name].regularMutations = newRegularMutations;
        }
    });
    return clone;
}

/** Gets all possible inflections of the word
 * @param  {String} word word to search for
 * @returns {Object} inflection of a word: {inflectionName, fix, type, mutation}
 */
function getInflections(word) {
    if (!this.inflections) return {};

    const inflections = [];

    Object.keys(this.inflections).forEach(inflectionName => {
        const { fix, regularMutations, irregularMutations } = this.inflections[inflectionName];

        const objectForMatch = {
            inflectionName,
            fix,
        };
        /* irregular mutations first, if something is irregular may  also be regular
         (at least in English, because most all english words end in s when possessive or plural)
         */
        if (irregularMutations) {
            irregularMutations.forEach(m => {
                if (word.match(m.regexp)) {
                    inflections.push(Object.assign({ type: 'irregularMutation', ...m }, objectForMatch));
                }
            });
        }

        if (regularMutations) {
            regularMutations.forEach(m => {
                if (word.match(m.regexp)) {
                    inflections.push(Object.assign({ type: 'regularMutation', ...m }, objectForMatch));
                }
            });
        }
    });

    return inflections;
}
/** makes an educated guess how the word is inflected
 * @param  {string} word
 * @returns {array} list of possible inflections
 */
function guessInflection(word) {
    if (!this.inflections) return {};
    const inflections = this.getInflections(word);

    // if there's more that one inflection that's in the result, get the longer inflection
    // this accounts for the fact that s and 's both get returned
    // obviously buggy and English-specific
    const sortedInflections = inflections
        .sort((infA, infB) => infB.mutation.length - infA.mutation.length);
    return sortedInflections[0];
}
/** returns a word to root form (without inflections)
 * @param  {string} word
 * @param  {object} inflection the inflection to be removed
 * @returns {string}
 */
function removeInflection(word, inflection) {
    const mutateOn = inflection.type === 'irregularMutation' ? inflection.mutateOn : '';

    return word.replace(inflection.regexp, mutateOn);
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

    const typedList = list.map(nounObj => new Noun(
        nounObj.noun,
        nounObj.type,
        nounObj.subType,
        inflection,
    ));

    return typedList.length === 0 ? new Word(search) : typedList[0];
}
/** Noun Dictionary
 * @param  {Array} list Nouns with types and wordCategories
 * @param  {String} language two-letter abbreviation of language
 * @member {list} Array of typed Nouns
 * @member {language} String language for the dictionary
 * @member {inflections} Object inflections that can be applied to all nouns
 * @method {findWord} searches for a word in the dictionary and returns a Noun or a Word
 * @method {getInflections} 1 arg: word (string), returns all possible inflections for the word
 * @method {guessInflection} 1 arg: word (string), returns a single inflection (object)
 * @method {removeInflection} 2 args, word(string), inflection (object). returns string
 */
function NounDictionary(list, language, inflections) {
    this.list = list.sort((a, b) => {
        if (a.noun < b.noun) return -1;
        if (a.noun > b.noun) return 1;
        return 0;
    });
    this.language = language;
    this.inflections = getEnhancedInflections(inflections);
    this.getInflections = getInflections;
    this.guessInflection = guessInflection;
    this.removeInflection = removeInflection;
    this.findWord = findNoun;
}

export default NounDictionary;

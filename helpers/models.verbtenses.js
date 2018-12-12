/**
 * @param  {string} mood infinitive, imperative, indicative, subjunctive
 * @param  {string} tense='' past, present, future
 * @param  {} aspect='' simple, continuous, perfect, perfectContinuous
 */
export default function getVerbConjugationName(mood, tense = '', aspect = '') {
    const tenseName = tense.length === 0 ? '' : `:${tense}`;
    const aspectName = aspect.length === 0 ? '' : `:${aspect}`;

    return `${mood}${tenseName}${aspectName}`;
}

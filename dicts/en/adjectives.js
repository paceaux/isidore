/*
* Adjectives
* https://www.ef.edu/english-resources/english-vocabulary/top-50-adjectives/
 */
import AdjectiveDictionary from '../../models/dictionaries/adjective.dictionary';
import { LANGUAGE_DICTIONARIES } from '../../constants';

const qualitativeAdjList = [
    'able', 'bad', 'best', 'better', 'big', 'black', 'certain', 'clear', 'different', 'early', 'easy', 'economic', 'federal', 'free', 'full', 'good', 'great', 'hard', 'high', 'human', 'important', 'international', 'large', 'late', 'little', 'local', 'long', 'low', 'major', 'military', 'national', 'new', 'old', 'only', 'other', 'political', 'possible', 'public', 'real', 'recent', 'right', 'small', 'social', 'special', 'strong', 'sure', 'true', 'white', 'whole', 'young',
];

const qualitativeAdjectives = qualitativeAdjList.map(descriptiveAdjective => ({
    adjective: descriptiveAdjective,
    type: 'descriptive',
}));

const possessiveAdjList = ['my', 'our', 'your', 'his', 'her', 'its', 'their'];

const possessiveAdjectives = possessiveAdjList.map(possessiveAdjective => ({
    adjective: possessiveAdjective,
    type: 'possessive',
}));

const quantitativeAdjList = ['half', 'some', 'many', 'whole', 'enough', 'sufficient', 'most', 'few'];

const quantitativeAdjectives = quantitativeAdjList.map(quantitativeAdjective => ({
    adjective: quantitativeAdjective,
    type: 'quantitative',
}));

const interrogativeAdjList = [
    'whose', 'which', 'what', 'how'];

const interrogativeAdjectives = interrogativeAdjList.map(interrogativeAdjective => ({
    adjective: interrogativeAdjective,
    type: 'interrogative',
}));

const distributiveAdjList = [
    'each', 'every', 'either', 'neither', 'any', 'one'];

const distributiveAdjectives = distributiveAdjList.map(distributiveAdjective => ({
    adjective: distributiveAdjective,
    type: 'distributive',
}));

const demonstrativeAdjectives = [
    {
        adjective: 'this',
        type: 'demonstrative',
        subtype: 'proximity',
    },
    {
        adjective: 'that',
        type: 'demonstrative',
        subtype: 'proximity',
    },
    {
        adjective: 'these',
        type: 'demonstrative',
        subtype: 'proximity',
    },
    {
        adjective: 'those',
        type: 'demonstrative',
        subtype: 'proximity',
    },
    {
        adjective: 'first',
        type: 'demonstrative',
        subtype: 'sequence',
    },
    {
        adjective: 'last',
        type: 'demonstrative',
        subtype: 'sequence',
    },
    {
        adjective: 'second',
        type: 'demonstrative',
        subtype: 'sequence',
    },
];

const articleAdjectives = [
    {
        adjective: 'the',
        type: 'article',
        subtype: 'definite',
    },
    {
        adjective: 'a',
        type: 'article',
        subtype: 'indefinite',
    },
    {
        adjective: 'an',
        type: 'article',
        subtype: 'indefinite',
    }];

export default new AdjectiveDictionary([
    ...possessiveAdjectives,
    ...quantitativeAdjectives,
    ...qualitativeAdjectives,
    ...distributiveAdjectives,
    ...demonstrativeAdjectives,
    ...interrogativeAdjectives,
    ...articleAdjectives,
], LANGUAGE_DICTIONARIES.get('en'));

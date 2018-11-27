/**
 * https://en.oxforddictionaries.com/grammar/transitive-and-intransitive-verbs
 */
import VerbDictionary from '../../models/dictionaries/verb.dictionary';

const transitiveVerbsList = [
    'give', 'bring', 'buy', 'cost', 'give', 'get', 'leave', 'lend', 'make',
    'offer', 'owe', 'pass', 'pay', 'play', 'promise', 'read', 'refuse', 'send', 'show',
    'make', 'sing', 'sell', 'take', 'take', 'show', 'wish', 'help',
];

const intransitiveVerbsList = [
    'move', 'start', 'change', 'close', 'open', 'stop', 'do', 'set', 'run', 'live', 'wash', 'write', 'drive',
];

const transitiveVerbs = transitiveVerbsList.map(commonNoun => ({
    verb: commonNoun,
    type: 'transitive',
    valence: {
        arguments: 2,
    },
}));

const intransitiveVerbs = intransitiveVerbsList.map(commonNoun => ({
    verb: commonNoun,
    type: 'intransitive',
    valence: {
        arguments: 1,
    },
}));

const verbAspects = ['simple', 'continuous', 'perfect', 'perfectContinuous'];

const verbTenses = ['past', 'present', 'future'];

const verbMoods = ['indicative', 'imperative', 'subjunctive'];





const moods = {
    indicative: {
        present: {
            simple: 'goes',
            continuous: 'going',
            perfect: 'have gone',
            perfectContinuous: 'have been going',
        },
        past: {
            simple: 'went',
            continuous: 'was going',
            perfect: 'had gone',
            perfectContinuous: 'had been going',
        },
        future: {
            simple: 'will go',
            continuous: 'will be going',
            perfect: 'will have gone',
            perfectContinuous: 'will have been going',
        },
    },
    imperative: {},
    subjunctive: {},
};


export default new VerbDictionary([
    ...transitiveVerbs,
    ...intransitiveVerbs,
], 'En', moods);

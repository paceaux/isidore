/**
 * https://en.oxforddictionaries.com/grammar/transitive-and-intransitive-verbs
 */
import VerbDictionary from '../../models/dictionaries/verb.dictionary';

const transitiveVerbsList = [
    'give', 'bring', 'buy', 'cost', 'give', 'get', 'leave', 'lend', 'make',
    'offer', 'owe', 'pass', 'pay', 'promise', 'read', 'refuse', 'send', 'show',
    'make', 'sing', 'sell', 'take', 'take', 'show', 'wish', 'help',
];

const intransitiveVerbsList = [
    'move', 'start', 'change', 'close', 'open', 'stop', 'do', 'set', 'run', 'live', 'wash', 'write',
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

export default new VerbDictionary([
    ...transitiveVerbs,
    ...intransitiveVerbs,
], 'En');

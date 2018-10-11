/**
 * https://en.oxforddictionaries.com/grammar/transitive-and-intransitive-verbs
 */
const transitiveVerbsList = [
    'give', 'bring', 'buy', 'cost', 'give', 'get', 'leave', 'lend', 'make',
    'offer', 'owe', 'pass', 'pay', 'promise', 'read', 'refuse', 'send', 'show',
    'make', 'sing', 'sell', 'take', 'take', 'show', 'wish',
];

const intransitiveVerbsList = [
    'move', 'start', 'change', 'close', 'open', 'stop', 'do', 'set', 'run', 'live', 'wash', 'write',
];

const transitiveVerbs = transitiveVerbsList.map(commonNoun => ({
    noun: commonNoun,
    type: 'transitive',
    valence: {
        arguments: 2,
    },
}));

const intransitiveVerbs = intransitiveVerbsList.map(commonNoun => ({
    noun: commonNoun,
    type: 'intransitive',
    valence: {
        arguments: 1,
    },
}));

export default [
    ...transitiveVerbs,
    ...intransitiveVerbs,
];

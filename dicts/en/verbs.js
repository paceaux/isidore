/**
 * https://en.oxforddictionaries.com/grammar/transitive-and-intransitive-verbs
 */
import VerbDictionary from '../../models/dictionaries/verb.dictionary';
import verbConjugations from './verbs.inflections';

// die is intransitive
// https://www.linguasorb.com/english/verbs/regular-verbs/
const regularVerbsList = ['accept', 'add', 'agree', 'allow', 'appear', 'argue', 'arrive', 'ask', 'base', 'believe', 'call', 'carry', 'cause', 'change', 'close', 'consider', 'continue', 'cover', 'create', 'decide', 'describe', 'determine', 'develop', 'die', 'drop', 'end', 'enter', 'expect', 'explain', 'face', 'fail', 'fill', 'focus', 'follow', 'happen', 'help', 'hope', 'identify', 'include', 'increase', 'indicate', 'involve', 'join', 'kill', 'lay', 'like', 'listen', 'live', 'look', 'love', 'move', 'need', 'note', 'occur', 'offer', 'open', 'owe', 'pass', 'pick', 'place', 'plan', 'play', 'point', 'prepare', 'produce', 'promise', 'protect', 'provide', 'pull', 'push', 'raise', 'reach', 'refuse', 'realize', 'receive', 'recognize', 'reduce', 'remain', 'remember', 'report', 'represent', 'require', 'return', 'save', 'seem', 'serve', 'share', 'show', 'start', 'stay', 'stop', 'suggest', 'support', 'talk', 'thank', 'try', 'turn', 'use', 'wait', 'walk', 'want', 'watch', 'wish', 'wonder', 'work'];

// irregular transitive verbs
const transitiveVerbsList = [
    'bring', 'buy', 'cost', 'get', 'give', 'leave', 'lend', 'make', 'pay', 'read', 'sell', 'send', 'sing', 'take',
];
// live, start,stop ===  is a regular verb
const intransitiveVerbsList = [
    'clap', 'do', 'drive', 'fall', 'frown', 'grow', 'laugh', 'live', 'occur', 'run', 'rise', 'set', 'sink', 'sit', 'smile', 'sleep', 'start', 'stand', 'stop', 'swim', 'wash', 'wind', 'write',
];


const regularVerbs = regularVerbsList.map(regularVerb => ({
    verb: regularVerb,
    type: 'transitive',
    valence: {
        arguments: 2,
    },
    conjugation: 'regular',
}));

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
    ...regularVerbs,
    ...transitiveVerbs,
    ...intransitiveVerbs,
], 'En', verbConjugations);

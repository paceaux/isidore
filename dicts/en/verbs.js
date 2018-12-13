/**
 * https://en.oxforddictionaries.com/grammar/transitive-and-intransitive-verbs
 */
import VerbDictionary from '../../models/dictionaries/verb.dictionary';
import verbConjugations from './verbs.inflections';

// https://www.linguasorb.com/english/verbs/regular-verbs/
const regularVerbsList = ['accept', 'add', 'agree', 'allow', 'appear', 'argue', 'arrive', 'ask', 'base', 'believe', 'call', 'carry', 'cause', 'change', 'close', 'consider', 'continue', 'cover', 'create', 'decide', 'describe', 'determine', 'develop', 'die', 'drop', 'end', 'enter', 'expect', 'explain', 'face', 'fail', 'fill', 'focus', 'follow', 'happen', 'help', 'hope', 'identify', 'include', 'increase', 'indicate', 'involve', 'join', 'kill', 'lay', 'like', 'listen', 'live', 'look', 'love', 'move', 'need', 'note', 'occur', 'offer', 'open', 'pass', 'pick', 'place', 'plan', 'play', 'point', 'prepare', 'produce', 'protect', 'provide', 'pull', 'push', 'raise', 'reach', 'realize', 'receive', 'recognize', 'reduce', 'remain', 'remember', 'report', 'represent', 'require', 'return', 'save', 'seem', 'serve', 'share', 'start', 'stay', 'stop', 'suggest', 'support', 'talk', 'thank', 'try', 'turn', 'use', 'wait', 'walk', 'want', 'watch', 'wonder', 'work'];

const transitiveVerbsList = [
    'bring', 'buy', 'cost', 'get', 'give', 'leave', 'lend', 'make', 'owe', 'pay', 'promise', 'read', 'refuse', 'sell', 'send', 'show', 'sing', 'take', 'wish',
];
// live, start,stop ===  is a regular verb
const intransitiveVerbsList = [
    'do', 'drive', 'live', 'run', 'set', 'start', 'stop', 'wash', 'write',
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

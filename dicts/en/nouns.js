/**
 * https://www.espressoenglish.net/100-common-nouns-in-english/
 * http://www.englishbanana.com/worksheets/big-grammar-book-2-100-common-uncountable-nouns-in-english/
 */
import NounDictionary from '../../models/dictionaries/noun.dictionary';

const commonNounList = [
    'time', 'year', 'people', 'way', 'day', 'man', 'thing', 'woman', 'life',
    'child', 'world', 'school', 'state', 'family', 'student', 'group',
    'country', 'problem', 'hand', 'part', 'place', 'case', 'week', 'company',
    'system', 'program', 'question', 'work', 'government', 'number', 'night',
    'point', 'home', 'water', 'room', 'mother', 'area', 'money', 'story',
    'fact', 'month', 'lot', 'right', 'study', 'book', 'eye', 'job', 'word',
    'business', 'issue', 'side', 'kind', 'head', 'house', 'service', 'friend',
    'father', 'power', 'hour', 'game', 'line', 'end', 'member', 'law', 'car',
    'city', 'community', 'name', 'room', 'mother', 'area', 'money', 'story',
    'fact', 'month', 'lot', 'right', 'study', 'book', 'eye', 'job', 'word',
    'business', 'issue', 'side', 'kind', 'head', 'house', 'service', 'friend',
    'father', 'power', 'hour', 'game', 'line', 'end', 'member', 'law', 'car',
    'city', 'community', 'name',
];

const uncountableNounList = [
    'accommodation', 'advice', 'air', 'alcohol', 'art', 'beauty', 'beef',
    'behaviour', 'blood', 'bread', 'butter', 'cheese', 'chewing gum',
    'chocolate', 'coffee', 'confusion', 'cotton', 'education', 'electricity',
    'entertainment', 'evidence', 'experience', 'fiction', 'flour', 'food',
    'fresh air', 'furniture', 'gold', 'grass', 'ground', 'happiness',
    'history', 'homework', 'honey', 'hope', 'ice', 'information', 'jam',
    'juice', 'knowledge', 'lamb', 'lightning', 'literature', 'love', 'luck',
    'luggage', 'meat', 'milk', 'mist', 'money', 'music', 'news', 'noise',
    'oil', 'oxygen', 'paper', 'patience', 'pay', 'peace', 'peanut butter',
    'pepper', 'petrol', 'plastic', 'pork', 'power', 'pressure', 'progress',
    'rain', 'research', 'rice', 'sadness', 'safety', 'salad', 'salt', 'sand',
    'shopping', 'silver', 'snow', 'space', 'speed', 'sport', 'steam',
    'success', 'sugar', 'sunshine', 'tea', 'tennis', 'time', 'toothpaste',
    'traffic', 'trouble', 'trousers', 'vinegar', 'washing up', 'water',
    'weather', 'wine', 'wood', 'wool', 'work',
];

const countableNounList = [
    'accident', 'account', 'actor', 'address', 'adult', 'animal', 'answer',
    'apartment', 'article', 'artist', 'baby', 'bag', 'ball', 'bank', 'battle',
    'beach', 'bed', 'bell', 'bill', 'bird', 'boat', 'book', 'bottle', 'box',
    'boy', 'bridge', 'brother', 'bus', 'bush', 'camp', 'captain', 'car',
    'card', 'case', 'castle', 'cat', 'chair', 'chapter', 'chest', 'child',
    'cigarette', 'city', 'class', 'club', 'coat', 'college', 'computer',
    'corner', 'country', 'crowd', 'cup', 'daughter', 'day', 'desk', 'doctor',
    'dog', 'door', 'dream', 'dress', 'driver', 'ear', 'edge', 'effect', 'egg',
    'election', 'engine', 'eye', 'face', 'factory', 'farm', 'father', 'field',
    'film', 'finger', 'foot', 'friend', 'game', 'garden', 'gate', 'girl', 'group',
    'gun', 'hall', 'hand', 'handle', 'hat', 'head', 'heart', 'hill', 'horse',
    'hospital', 'hotel', 'hour', 'house', 'husband', 'idea', 'island', 'issue',
    'job', 'journey', 'judge', 'key', 'king', 'kitchen', 'lady', 'lake',
    'library', 'line', 'list', 'machine', 'magazine', 'man', 'meal', 'meeting',
    'member', 'message', 'method', 'minute', 'mistake', 'model', 'month',
    'motor', 'mouth', 'nation', 'neck', 'newspaper', 'office', 'page', 'park',
    'party', 'path', 'picture', 'plan', 'plane', 'plant', 'problem', 'product',
    'programme', 'project', 'ring', 'river', 'road', 'room', 'scheme',
    'school', 'ship', 'shirt', 'shock', 'shop', 'sister', 'smile', 'son',
    'spot', 'star', 'station', 'stream', 'street', 'student', 'table',
    'task', 'teacher', 'tent', 'thought', 'tour', 'town', 'valley', 'village',
    'walk', 'wall', 'week', 'window', 'woman', 'year',
];

const commonNouns = commonNounList.map(commonNoun => ({
    noun: commonNoun,
    type: 'entityClass',
    subType: 'common',
}));

const countableNouns = countableNounList.map(countableNoun => ({
    noun: countableNoun,
    type: 'enumerative',
    subType: 'countable',
}));

const uncountableNouns = uncountableNounList.map(countableNoun => ({
    noun: countableNoun,
    type: 'enumerative',
    subType: 'uncountable',
}));

const inflections = {
    plural: {
        fix: 'suffix', // infix, prefix, suffix
        regularMutations: [
            's',
        ],
        irregularMutations: [
            {
                mutation: 'ies',
                mutateOn: 'y',
            },
            {
                mutation: 'ves',
                mutateOn: 'fe',
            },
        ],
    },
    possessive: {
        fix: 'suffix', // infix, prefix, suffix
        regularMutations: [
            '\'s', 's\'',
        ],
    },
};

export default new NounDictionary([
    ...commonNouns,
    ...countableNouns,
    ...uncountableNouns,
], 'En', inflections);

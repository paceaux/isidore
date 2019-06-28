import Language from '../../models/language';
import Adjectives from './adjectives';
import Adverbs from './adverbs';
import Conjunctions from './conjunctions';
import Interjections from './interjections';
import Prepositions from './prepositions';
import Pronouns from './pronouns';
import Nouns from './nouns';
import Verbs from './verbs';
import { LANGUAGE_DICTIONARIES } from '../../constants';

const dictionaryName = LANGUAGE_DICTIONARIES.get('en');

export default new Language({
    Adjectives, Adverbs, Prepositions, Pronouns, Conjunctions, Interjections, Nouns, Verbs,
}, dictionaryName);

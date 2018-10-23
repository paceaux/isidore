import Verb from '../partsOfSpeech/verb';
import Word from '../word';

function findVerb(word) {
    const list = this.list.filter(obj => word.indexOf(obj.verb) !== -1);

    const typedList = list.map(verbObj => new Verb(verbObj.verb, verbObj.type));

    return typedList.length === 0 ? new Word(word) : typedList[0];
}

function VerbDictionary(list, language) {
    this.list = list;
    this.language = language;

    this.findWord = findVerb;
}

export default VerbDictionary;

import Noun from '../partsOfSpeech/noun';
import Word from '../word';

function findNoun(word) {
    const list = this.list.filter(obj => word.indexOf(obj.noun) !== -1);

    const typedList = list.map(nounObj => new Noun(nounObj.noun, nounObj.type, nounObj.subType));

    return typedList.length === 0 ? new Word(word) : typedList[0];
}

function NounDictionary(list, language) {
    this.list = list;
    this.language = language;

    this.findWord = findNoun;
}

export default NounDictionary;

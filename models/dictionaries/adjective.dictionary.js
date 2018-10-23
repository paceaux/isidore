import Adjective from '../partsOfSpeech/adjective';
import Word from '../word';

function findAdjective(word) {
    const list = this.list.filter(obj => word.indexOf(obj.adjective) !== -1);

    const typedList = list.map(intObj => new Adjective(
        intObj.adjective,
        intObj.type,
        intObj.wordCategory));

    return typedList.length === 0 ? new Word(word) : typedList[0];
}

function AdjectiveDictionary(list, language) {
    this.list = list;
    this.language = language;

    this.findWord = findAdjective;
}

export default AdjectiveDictionary;

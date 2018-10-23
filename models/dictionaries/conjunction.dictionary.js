import Conjunction from '../partsOfSpeech/conjunction';
import Word from '../word';

function findConjunction(word) {
    const list = this.list.filter(obj => obj.conjunction.includes(word));

    const typedList = list.map(conjObj => new Conjunction(conjObj.conjunction, conjObj.type));

    return typedList.length === 0 ? new Word(word) : typedList[0];
}

function ConjunctionDictionary(list, language) {
    this.list = list;
    this.language = language;

    this.findWord = findConjunction;
}

export default ConjunctionDictionary;

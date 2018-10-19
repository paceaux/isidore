import Conjunction from '../partsOfSpeech/conjunction';

function findConjunction(word) {
    const list = this.list.filter(obj => obj.conjunction.includes(word));

    const typedList = list.map(conjObj => new Conjunction(conjObj.conjunction, conjObj.type));

    return typedList.length === 0 ? undefined : typedList[0];
}

function adverbDictionary(list, language) {
    this.list = list;
    this.language = language;

    this.findWord = findConjunction;
}

export default adverbDictionary;

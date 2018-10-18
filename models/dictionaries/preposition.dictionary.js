import Preposition from '../preposition';

function findPreposition(word) {
    const list = this.list.filter(obj => word.indexOf(obj.preposition) !== -1);

    const typedList = list.map(prepObj => new Preposition(prepObj.preposition, prepObj.type));

    return typedList.length === 0 ? undefined : typedList[0];
}

function PrepositionDictionary(list, language) {
    this.list = list;
    this.language = language;

    this.findWord = findPreposition;
}

export default PrepositionDictionary;

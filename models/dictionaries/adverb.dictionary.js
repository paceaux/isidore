import Adverb from '../adverb';

function findAdverb(word) {
    const list = this.list.filter(obj => word.indexOf(obj.adverb) !== -1);

    const typedList = list.map(adverbObj => new Adverb(adverbObj.adverb, adverbObj.type));

    return typedList.length === 0 ? undefined : typedList[0];
}

function adverbDictionary(list, language) {
    this.list = list;
    this.language = language;

    this.findWord = findAdverb;
}

export default adverbDictionary;

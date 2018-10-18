import Interjection from '../interjection';

function findInterjection(word) {
    const list = this.list.filter(obj => word.indexOf(obj.interjection) !== -1);

    const typedList = list.map(intObj => new Interjection(
        intObj.interjection,
        intObj.type,
        intObj.wordCategory));

    return typedList.length === 0 ? undefined : typedList[0];
}

function InterjectionDictionary(list, language) {
    this.list = list;
    this.language = language;

    this.findWord = findInterjection;
}

export default InterjectionDictionary;

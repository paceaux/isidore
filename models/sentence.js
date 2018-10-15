
const types = [
    {
        type: 'declarative',
        punctuationMarkers: ['.'],
    },
    {
        type: 'interrogative',
        punctuationMarkers: ['?', '¿'],
    },
    {
        type: 'exclamatory',
        punctuationMarkers: ['!', '¡'],
    },
    {
        type: 'imperative',
        punctuationMarkers: [],
    },
    {
        type: 'exclamatory+interrogative',
        punctuationMarkers: ['!?', '?!', '‽'],
    },
];

function guessSentenceTypeByPunctuation(text) {
    let typeList = types[0];

    typeList = types.filter((type) => {
        const markersPresent = type
            .punctuationMarkers
            .filter(marker => text.indexOf(marker) !== -1);

        return markersPresent.length > 0;
    });

    return typeList[typeList.length - 1].type;
}

function Sentence(text, language, type) {
    this.text = text;
    this.type = type;
    this.language = language;
    this.wordList = this.text.split(/\s/);

    if (!type) {
        this.type = guessSentenceTypeByPunctuation(text);
    }

    if (!language) {
        this.language = 'En';
    }

    return this.text;
}

Sentence.prototype.getSentenceType = guessSentenceTypeByPunctuation;
Sentence.prototype.types = types;

export default Sentence;


const types = [
    {
        type: 'declarative',
    },
    {
        type: 'interrogative',
    },
    {
        type: 'exclamatory',
    },
    {
        type: 'imperative',
    },
];

function Sentence(text, type, language) {
    this.text = text;
    this.type = type;
    this.language = language;
    this.wordList = this.text.split(' ');

    return this.text;
}

Sentence.prototype.types = types;

export default Sentence;

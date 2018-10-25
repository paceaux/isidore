# Grammar-js (real name TBD)
Takes text and identifies the grammatical elements within
This is all _super_ experimental.

## API

### `PartsOfSpeech`
Classes that are the 8 core parts of speech
 * `Noun`
 * `Pronoun`
 * `Verb`
 * `Adjective`
 * `Adverb`
 * `Conjunction`
 * `Interjection`
 * `Preposition`

### Languages
All languages withing the utility.
Right now we just have `En`, which is a `Language`;

`Language` class
| Member | Type | Description |
|-------| -----| -------------|
|`grammarDictionaries` | Object |  `NounDictionary`, `PronounDictionary`, `VerbDictionary`, `AdjectiveDictionary`, `AdverbDictionary`, `ConjunctionDictionary`, `InterjectionDictionary`, `PrepositionDictionary`
| `language` | string | two-letter description of language|
| `findWord()` | method | accepts a string, returns an array containing `partOfSpeech` or a `word` if no word is found

### `Sentence`
The sentence is where the parsing magic starts.

| Member | Type | Description |
|-------| -----| -------------|
| `text`| string | raw text of the sentence |
|`type` | string | declarative, interrogative, imperative, exclamatory|
| `language` | string | Language (`En`) is default|
| `rawWordList`| array | only the words in the sentence |
| `wordList`| array |  each word in the sentence classified as either a  or word |
| `types` | array | the possible types that a sentence could have |
| `getSentenceType()` | method | returns string, the type of sentence. Guesses what the sentence type is based on punctuation  |

#### Example

    const { Sentence } = grammar
    const mySentence = new Sentence('He gives her a car.');
    const { wordList } = mySentence;

    console.log(mySentence.type) // returns 'declarative';

    /* wordList is now an array of words */


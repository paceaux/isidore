/**
 * https://en.oxforddictionaries.com/grammar/types-of-noun
 * https://en.wikipedia.org/wiki/Noun#Classification
 * https://en.wikipedia.org/wiki/Proper_noun
 */

 const types = [
     {
         type: 'entity-class',
         subTypes: [
             'proper',
             'common'
         ]
     },
     {
         type: 'enumerative',
         subTypes: [
            'countable',
            'uncountable' // mass noun
         ]
     },
     {
         type: 'sense',
         subTypes: [
             'concrete',
             'abstract'
         ]
     },
     {
         type: 'ownership',
         subTypes: [
             'alien',
             'inalienable'
         ]
     }
 ];

 function Noun(word, type) {
     this.word = word;
     this.type = type;

     return this.word;
 }

 Noun.prototype.types = types;

 export default Noun;

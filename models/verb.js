/**
 * https://www.uvu.edu/writingcenter/docs/handouts/grammar/typesofverbs.pdf
 * https://en.wikipedia.org/wiki/Verb
 */

 const types = [
     {
         type: 'transitive',
     },
     {
         type: 'intransitive',
     },
     {
         type: 'ditransitive',
     }
 ];

 const valencies = [
    {
        valence: 'avalent',
        arguments: 0,
    },
    {
        valence: 'intransitive',
        arguments: 1,
    },
    {
        valence: 'transitive',
        arguments: 2,
    },
    {
        valence: 'ditransitive',
        arguments: 3
    }
 ];



 function Verb(word, type) {
     this.word = word;
     this.type = type;

     return this.word;
 }

 Verb.prototype.types = types;
 Verb.prototype.valencies = valencies;

 export default Verb;

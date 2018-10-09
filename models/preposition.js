/**
 * https://www.thefreedictionary.com/Categories-of-Prepositions.htm
 */

 const types = [
    {
        type: 'time',
    },
    {
        type: 'place',
    },
    {
        type: 'direction',
    },
    {
        type: 'agency',
    },
    {
        type: 'instrument',
    },
    {
        type: 'purpose',
    },
    {
        type: 'connection',
    },
    {
        type: 'origin',
    }
 ];

 function Preposition(word, type) {
     this.word = word;
     this.type = type;

     return this.word;
 };

 Preposition.prototype.types = types;

 export default Preposition;
 
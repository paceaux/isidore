/**
 * https://en.wikipedia.org/wiki/Interjection
 */

 const types = [
    {
        type: 'volitive',
    },
    {
        type: 'emotive',
    },
    {
        type: 'cognitive',
    }
 ];

 const wordCategories = [
     {
         wordCategory: 'primary',
     },
     {
         wordCategory: 'secondary',
     }
 ];

 function Interjection(word, type, wordCategory) {
     this.word = word;
     this.type = type;
     this.wordCategory = wordCategory;

     return this.word;
 }

 Interjection.prototype.types = types;
 Interjection.prototype.wordCategories = wordCategories;

 export default Interjection;

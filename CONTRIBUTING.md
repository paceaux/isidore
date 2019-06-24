# How to Contribute to Isidore
Whoa! You want to help out? Awesome. 

## Did you find a bug?
1. Please forgive the creator. This is still in its infancy. Language is hard and so is teaching a computer how to understand it. 
2. Open an issue under [Github Issues](https://github.com/paceaux/isidore/issues). 
3. Identify the kind of bug 
    - Apply the "Corpus Bug" label if a word is in the wrong dictionary, or has incorrect information
    - Apply the "bug" label if something just plain didn't work
4. Add any and all relevant details

## Fixing a bug
1. Review the issues labelled as `bug` and find one that looks fun to work on
2. create a branch called `bug/<ISSUE-NUMBER>`
3. Do your thing
4. Submit a pull request to the `develop` branch

## Suggesting an enhancement
Ok, seriously? This thing is suuuuper new. It barely tags parts of speech. 
Right now Isidore needs help with verb conjugation identification. If you have suggestions around identifying verbs, make a ticket. 

## Working on an enhancement
contact the creator, [Frank M. Taylor](frank.m.taylor08@gmail.com). Sort out what may be a good enhancement. 

## Identifying additions for the corpus
We only have an English corpus, and it's a very small one (populated from sources listed at the bottom). As English has somewhere between 500,000 and 1,000,000 words, chances are high that Isidore missed a word. 

If you wish to add to any part of speech within the English corpus:

1. Open an issue under [Github Issues](https://github.com/paceaux/isidore/issues). 
2. In the description, provide the following
    1. The word
    2. Part of speech to which the word belongs
    3. a complete content model for the word (look in `models/partsOfSpeech/` for examples)

## Adding to the Corpus
1. Review the issues labelled "corpus enhancement" and find one that looks fun and has all the necessary model details
2. create a branch called `corpus/<ISSUE-NUMBER>`
3. write a unit test that confirms it works
4. Merge that sucker into `develop`. Yes, really. 

Corpus updates can go straight to `develop` as long as there are unit tests with them that prove they're working. 

## Adding a new language
Isidore was created for English first, but with [Romance languages ](https://en.wikipedia.org/wiki/Romance_languages) in mind. If you would like to assist in adding a Spanish or French, contact the creator, [Frank M. Taylor](frank.m.taylor08@gmail.com).

If you would like to add a [Semitic language](https://en.wikipedia.org/wiki/Semitic_languages), that, is on the horizons. Again, contact the creator. 

Isidore does not have any plans for Turkic or Sino-Tibetan langauges at this time. Infixes are a pain in the butt, and everything about Isidore is based on an alphabet-based writing system. 

## Styleguide

### JS
This follows the [AirBnB styleguide](https://github.com/airbnb/javascript) with rare exception. 

**Obey the linter.**

#### Testing
Write a unit test for every function. 

#### Comments
* JSDoc for documenting functions and classes
* if something needs to be fixed, flag it with `TODO`
* comment as if an idiot owns this repo


#### Debugging
If you want to debug something, create a `debug.test.js` in the test folder. Everything is already set up for you to run a `npm run debug` command. 


### Commits
* Use the present tense and the indicative mood. "adds word to corpus")
* Limit first line to 60 chars or less
* no emoji. 


# English Corpus Sources

* Adjectives
    * https://www.ef.edu/english-resources/english-vocabulary/top-50-adjectives/

* Adverbs
    * http://www.yourdictionary.com/index.php/pdf/articles/140.100adverbs.pdf
    * http://www.grammar.cl/Basic/Adverbs_Frequency.htm
    * https://dictionary.cambridge.org/us/grammar/british-grammar/about-adjectives-and-adverbs/adverbs-types
* Conjunctions
    * https://www.english-grammar-revolution.com/list-of-conjunctions.html
* Interjections
    * http://www.yourdictionary.com/index.php/pdf/articles/156.listof-interjections.pdf
* Nouns
    * https://www.espressoenglish.net/100-common-nouns-in-english/
    * http://www.englishbanana.com/worksheets/big-grammar-book-2-100-common-uncountable-nouns-in-english/
* Prepositions
    * https://www.talkenglish.com/vocabulary/top-50-prepositions.aspx
* Pronouns
    * https://www.ef.edu/english-resources/english-grammar/pronouns/
* Verbs
    * https://en.oxforddictionaries.com/grammar/transitive-and-intransitive-verbs






import VerbTense from './verbtense';

function get3dVerbMap(moodNames, tenseNames, aspectNames) {
    const moodMap = new Map();
    const tenseMap = new Map();
    const aspectMap = new Map();

    aspectNames.forEach(aspect => {
        aspectMap.set(aspect, undefined);
    });

    tenseNames.forEach(tense => {
        tenseMap.set(tense, aspectMap);
    });

    moodNames.forEach(mood => {
        moodMap.set(mood, tenseMap);
    });

    return moodMap;
}

function addEmptyTenseToMap(threeDMap) {
    const clone = new Map(threeDMap);

    clone.forEach((tnsMap, moodName) => {
        tnsMap.forEach((aspMap, tenseName) => {
            aspMap.forEach((aspect, aspectName) => {
                aspMap.set(aspectName, new VerbTense(moodName, tenseName, aspectName));
            });
        });
    });
    return clone;
}

function getFlatMap(threeDMap) {
    const flatMap = new Map();

    threeDMap.forEach(tnsMap => {
        tnsMap.forEach(aspMap => {
            aspMap.forEach(aspect => {
                flatMap.set(aspect.name, aspect);
            });
        });
    });
    return flatMap;
}

function VerbTenses(moods, tenses, aspects) {
    this.moodNames = moods;
    this.tenseNames = tenses;
    this.aspectNames = aspects;

    const verbMap = get3dVerbMap(this.moodNames, this.tenseNames, this.aspectNames);
    const filledVerbMap = addEmptyTenseToMap(verbMap);
    this.verbMap = filledVerbMap;

    this.flatMap = getFlatMap(this.verbMap);
    return this;
}

export default VerbTenses;

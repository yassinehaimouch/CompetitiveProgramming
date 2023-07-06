function ArrayChallenge(strArr) {
  const word = strArr[0];
  const dictionary = strArr[1].split(',');

  let minLength = Infinity;

  for (let i = 0; i < dictionary.length; i++) {
    const dictWord = dictionary[i];
    let wordIndex = 0;
    let dictIndex = 0;
    let charsToRemove = 0;

    while (wordIndex < word.length && dictIndex < dictWord.length) {
      if (word[wordIndex] === dictWord[dictIndex]) {
        wordIndex++;
        dictIndex++;
      } else {
        charsToRemove++;
        wordIndex++;
      }
    }

    charsToRemove += word.length - wordIndex;
    minLength = Math.min(minLength, charsToRemove);
  }

  return minLength === Infinity ? -1 : minLength;
}
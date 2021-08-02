
import settings from './settings';
import wordlists from '../data/wordlists';

const specialChars = '<>{}[]()-=+\\|/?!@#$%^&*';

class Wordlists {
  getRandomWords(letterCount, wordCount) {
    const words = [];

    for (let i = 0; i < wordCount; i++) {
      const newWord = wordlists[letterCount][Math.floor(Math.random() * wordlists[letterCount].length)];

      if (words.indexOf(newWord) !== -1) i--;
      else words.push(newWord);
    }

    return words;
  }

  generateRandomString(length) {
    let res = '';

    for (let i = 0; i < length; i++) {
      res += specialChars[Math.floor(Math.random() * specialChars.length)];
    }

    return res;
  }

  generateWords() {
    return this.getRandomWords(settings.WORD_LENGTH, settings.WORD_COUNT).map(word => {
      const beforeLength = Math.floor(Math.random() * (13 - settings.WORD_LENGTH));
      const beforeWord = this.generateRandomString(beforeLength);
      const afterWord = this.generateRandomString(12 - settings.WORD_LENGTH - beforeLength);

      return {
        beforeWord,
        word,
        afterWord
      };
    });
  }
}

export default new Wordlists();

function generateAcronym(phrase) {
    const words = phrase.split(' ');
    let acronym = '';
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      acronym += word[0].toUpperCase();
    }
  
    return acronym;
  }

  let phrase = 'cascading style sheets';

  console.log(generateAcronym(phrase));
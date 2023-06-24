function convertToCamelCase(cssStyle) {
    const words = cssStyle.split('-');
    let camelCase = words[0];
  
    for (let i = 1; i < words.length; i++) {
      camelCase += words[i][0].toUpperCase() + words[i].slice(1);
    }
  
    return camelCase;
  }


let cssStyle = 'font-size';
console.log(convertToCamelCase(cssStyle));
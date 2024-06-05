const transformString = (str) => {
    const strLength = str.length;
    if (strLength % 3 === 0 && strLength % 5 === 0) {
      return str
        .split('')
        .reverse()
        .join('')
        .split('')
        .map((char) => char.charCodeAt(0))
        .join(' ');
    } else if (strLength % 3 === 0) {
      return str.split('').reverse().join('');
    } else if (strLength % 5 === 0) {
      return str
        .split('')
        .map((char) => char.charCodeAt(0))
        .join(' ');
    } else {
      return str;
    }
  };
  
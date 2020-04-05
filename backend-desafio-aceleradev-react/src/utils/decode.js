module.exports = function decode(content, numberCripto) {
  const contentLowerCase = content.toLowerCase();
  let response = "";

  for (let i = 0; i < contentLowerCase.length; i++) {
    const charCode = contentLowerCase.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      let descript = charCode - 97 - numberCripto;
      if (descript < 0) {
        descript = 123 + descript;
      } else {
        descript = descript + 97;
      }
      response = response + String.fromCharCode(descript);
    } else {
      response = response + String.fromCharCode(charCode);
    }
  }
  return response;
};

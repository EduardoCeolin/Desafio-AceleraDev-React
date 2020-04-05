module.exports = function code(content, numberCripto) {
  const contentLowerCase = content.toLowerCase();
  let response = "";

  for (let i = 0; i < contentLowerCase.length; i++) {
    const charCode = contentLowerCase.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      let encript = ((charCode - 97 + numberCripto) % 26) + 97;
      response = response + String.fromCharCode(encript);
    } else {
      response = response + String.fromCharCode(charCode);
    }
  }
  return response;
};

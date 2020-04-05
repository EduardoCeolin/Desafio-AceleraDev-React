const code = require("../utils/code");
const decode = require("../utils/decode");

module.exports = {
  async cripto(request, response) {
    const { content, numberCripto, option } = request.body;

    if (option === "code") {
      const coded = await code(content, numberCripto);
      response.json(coded);
    }

    if (option === "decode") {
      const decoded = await decode(content, numberCripto);
      response.json(decoded);
    }
  }
};

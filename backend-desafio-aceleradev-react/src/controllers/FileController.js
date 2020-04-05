const decode = require("../utils/decode");
const codeToSha1 = require("../utils/codeToSha1");
const saveFile = require("../utils/saveFile");
const enviarDesafio = require("../services/desafioPost");
const api = require("../services/api");

module.exports = {
  async index(request, response) {
    const codenationResponse = (
      await api.get(
        "generate-data?token=d3a1c7d32e392452f797ca71d806232348e00352"
      )
    ).data;
    const path = "./answer.json";

    if (!codenationResponse) {
      return response.json("Dados insuficientes para gravar arquivo");
    }

    codenationResponse.decifrado = await decode(
      codenationResponse.cifrado,
      codenationResponse.numero_casas
    );
    codenationResponse.resumo_criptografico = await codeToSha1(
      codenationResponse.decifrado
    );

    //saveFile("./ee.json", codenationResponse);

    const respostaDesafio = await enviarDesafio(path);

    response.json(JSON.parse(respostaDesafio));
  }
};

const request = require("request");
const fs = require("fs");
const util = require("util");
const requestPromise = util.promisify(request);

module.exports = async function enviarResposta(path) {
  const options = {
    method: "POST",
    url:
      "https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=d3a1c7d32e392452f797ca71d806232348e00352",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    formData: {
      answer: fs.createReadStream(path)
    }
  };

  let response;
  await sendChallenge(options)
    .then(body => {
      response = body;
    })
    .catch(e => (response = e));

  return response;
};

async function sendChallenge(options) {
  return requestPromise(options).then(response => {
    if (response.statusCode === 200) {
      return response.body;
    }
    return Promise.reject(response.body);
  });
}

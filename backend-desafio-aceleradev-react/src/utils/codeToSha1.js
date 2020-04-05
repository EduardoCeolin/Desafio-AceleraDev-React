const crypto = require("crypto");

module.exports = function codeToSha1(content) {
  var hash = crypto.createHash("sha1");

  const data = hash.update(content);

  return data.digest("hex");
};

const fs = require("fs");

module.exports = function saveFile(path, content) {
  fs.writeFileSync(path, JSON.stringify(content));
};

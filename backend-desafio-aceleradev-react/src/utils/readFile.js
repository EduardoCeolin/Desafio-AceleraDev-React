const fs = require("fs");

module.exports = async function readFile(path) {
  try {
    const fileBuffer = await fs.readFileSync(path);
    return fileBuffer;
  } catch (error) {
    throw error;
  }
};

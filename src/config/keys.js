//load prod key if its a prod build, otherwise load dev key.
if (process.env.NODE_ENV === "production") {
    module.exports = require("./prod");
  } else {
    module.exports = require("./dev");
  }
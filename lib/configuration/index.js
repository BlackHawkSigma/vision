const nconf = require('nconf')

function Config() {
  nconf.argv().env("_")
  var enviroment = nconf.get("NODE:ENV") || "development"
  nconf.file(enviroment, "config/" + enviroment + ".json")
  nconf.file("default", "config/default.json")
}

Config.prototype.get = function (key) {
  return nconf.get(key)
}

module.exports = new Config()

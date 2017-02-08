"use strict"

const config = require("./config"),
      Promise = require("bluebird"),
      options = {
         promiseLib: Promise
      },
      pgp = require("pg-promise")(options)

pgp.pg.defaults.ssl = true

const db = pgp(config.db_url),
      logger = require("log4js").getLogger("repo")

module.exports = {
    query : db.query
}

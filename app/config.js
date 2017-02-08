"use strict"

var config = {}

config.port = process.env.PORT || 3000
config.db_url = process.env.DATABASE_URL

module.exports = config
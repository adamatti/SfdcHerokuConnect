"use strict"

const logger = require("log4js").getLogger("index"),
      express = require('express'),
      app = express(),
      repo = require("./repo"),
      config = require("./config")

app.get('/', function (req, res) {
  res.send({status:"ok"});
})

app.get('/tables', function(req, res){
    const sql = "SELECT table_schema,table_name FROM information_schema.tables;"
    return repo.query(sql).then( result => {
        res.send(result)
    }).catch (error => {
        logger.error(error)
        res.send({error})
    })
})

app.get('/tables/:table', function(req, res){
    const table = req.param("table")
    const sql = `SELECT * from ${table};` //cpt1.web_service_config__c;

    return repo.query(sql).then( result => {
        res.send(result)
    }).catch (error => {
        logger.error(error)
        res.send({error: "table not found", table})
    })
})

app.listen(config.port, function () {
    logger.info("Started on",config.port)
})


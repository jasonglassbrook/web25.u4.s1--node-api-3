/***********************************************************
  server /
***********************************************************/

/// tools ///
const express = require ('express')
const helmet = require ('helmet')
const logger = require ('./middleware/logger')
const respondWithError = require ('./middleware/respondWithError')

/// routers ///
const routers = {
  api : require ('./api/router'),
}

/***************************************
  setup server
***************************************/

const server = express ()

/// wares ///
server.use (helmet ())
server.use (express.json ())
server.use (logger)

/// routers ///
server.use ('/api', routers.api)

/// requests ///
server.route ('/')
  .get ((ri, ro) => {
    ro
      .status (200)
      .send (`<h2>Let's write some middleware!</h2>`)
  })

server.route ('*')
  .all (respondWithError (501))

/**************************************/

module.exports = server

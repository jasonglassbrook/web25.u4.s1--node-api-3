/***********************************************************
  timestamper
------------------------------------------------------------
  -> () ->
***********************************************************/

/***************************************
  definition
***************************************/

const timestamper = (ri, ro, next) => {
  ri.timestamp = Date.now ()

  next ()
}

/**************************************/

module.exports = timestamper

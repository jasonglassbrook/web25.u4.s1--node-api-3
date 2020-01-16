/***********************************************************
  requireRequestHas
------------------------------------------------------------
  -> here -> next
  -> here -X
***********************************************************/

const _ = require ('lodash/fp')
const { not, hasPaths } = require ('../tools')
const respondWithError = require ('./respondWithError')

/***************************************
  definition
***************************************/

const requireRequestHas = (paths, ...rest) => (ri, ro, next) => {
  const requestHas = hasPaths (paths) (ri)

  if (not (requestHas)) {
    respondWithError (400,
      `-- request must have: ${_.join ('\n- ') (['', ...paths])}`,
      ...rest,
    ) (ri, ro)
  }
  else {
    next ()
  }
}

/**************************************/

module.exports = requireRequestHas

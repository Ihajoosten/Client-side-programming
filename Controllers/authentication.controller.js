const logger = require('../Config/appconfig').logger
const jwt = require('jsonwebtoken')
const database = require('../DataAcces/SQL.js')

module.exports = {
  loginUser: (req, res, next) => {
    logger.info('loginUser aangeroepen')

    const user = req.body

    const query = `SELECT Password, UserId FROM [DBUser] WHERE EmailAddress='${user.EmailAddress}'`
    console.log(user.Password)

    database.exec(query, (err, rows) => {
      if (err) {
        const errorObject = {
          message: 'Er ging iets mis in de database.',
          code: 500
        }
        next(errorObject)
      }
      if (rows) {
        if (rows.recordset.length === 0 || req.body.Password !== rows.recordset[0].Password) {
          const errorObject = {
            message: 'Geen toegang: email bestaat niet of password is niet correct!',
            code: 401
          }
          next(errorObject)
        } else {
          logger.info('Password match, user logged id')
          logger.trace(rows.recordset)

          const payload = {
            UserId: rows.recordset[0].UserId
          }
          jwt.sign({ data: payload }, 'secret', { expiresIn: 60 * 60 }, (err, token) => {
            if (err) {
              const errorObject = {
                message: 'Kon geen JWT genereren.',
                code: 500
              }
              next(errorObject)
            }
            if (token) {
              res.status(200).json({
                result: {
                  token: token
                }
              })
            }
          })
        }
      }
    })
  },

  validateToken: (req, res, next) => {
    logger.info('validateToken aangeroepen')
    // logger.debug(req.headers)
    const authHeader = req.headers.authorization
    if (!authHeader) {
      errorObject = {
        message: 'Authorization header missing!',
        code: 401
      }
      logger.warn('Validate token failed: ', errorObject.message)
      return next(errorObject)
    }
    const token = authHeader.substring(7, authHeader.length)

    jwt.verify(token, 'secret', (err, payload) => {
      if (err) {
        errorObject = {
          message: 'not authorized',
          code: 401
        }
        logger.warn('Validate token failed: ', errorObject.message)
        next(errorObject)
      }
      logger.trace('payload', payload)
      if (payload.data && payload.data.UserId) {
        logger.debug('token is valid', payload)

        // user id wordt toegevoegd aan de payload zodat je altijd weet van wie bijvoorbeeld een post is
        req.userId = payload.data.UserId
        next()
      } else {
        errorObject = {
          message: 'UserId is missing!',
          code: 401
        }
        logger.warn('Validate token failed: ', errorObject.message)
        next(errorObject)
      }
    })
  }
}

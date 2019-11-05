import express from 'express'
const logger = require('../config/config.js').logger

const app = express()
const port = 3000

app.get('/', (req, res) => {
    logger.trace("/ GET aangeroepen");
    res.send('Hello World!')
})

// Generic endpoint handler - voor alle routes
app.all('*', (req, res, next) => {
    logger.info('Generieke afhandeling aangeroepen!')
    const { method, url } = req
    logger.info(`${method} ${url}`)
    next()
  })

  // Handle endpoint not found.
app.all('*', (req, res, next) => {
    const { method, url } = req
    const errorMessage = `${method} ${url} does not exist.`
    logger.warn(errorMessage)
    const errorObject = {
      message: errorMessage,
      code: 404,
      date: new Date()
    }
    next(errorObject)
  })
  
  // Error handler
  app.use((error, req, res) => {
    logger.error('Error handler: ', error.message.toString())
    res.status(error.code).json(error)
  })
  

app.listen(port, () => logger.info(`Server listening on port ${port}!`))
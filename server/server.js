import express from 'express';
import logger from './config/config.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Generic endpoint handler - voor alle routes
app.all("*", (req, res, next) => {
  logger.trace("Generieke afhandeling aangeroepen!");
  const { method, url } = req;
  logger.info(`${method} ${url}`);
  next();
});

// // Handle endpoint not found.
// app.all("*", (req, res, next) => {
//   const { method, url } = req;
//   const errorMessage = `${method} ${url} does not exist.`;
//   logger.warn(errorMessage);
//   const errorObject = {
//     message: errorMessage,
//     code: 404,
//     date: new Date()
//   };
//   next(errorObject);
// });

// // Error handler
// app.use((error, req, res) => {
//   logger.error("Error handler: ", error.message.toString());
//   res.status(error.code).json(error);
// });

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () =>
  logger.info(`Server listening on port ${port}!`)
);

module.exports = app;

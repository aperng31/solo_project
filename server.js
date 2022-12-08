const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const router = express.Router();
const pieceController = require('./src/controllers/pieceControllers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', pieceController.getPieces, (req, res) => {
  console.log('/api get');
  // console.log(res.locals.response);
  return res.status(200).send(res.locals.response);
})

app.post('/api', pieceController.createPiece, (req, res) => {
  // console.log('success');
  return res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});
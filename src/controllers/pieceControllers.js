const models = require('../models/pieceModels');

const pieceController = {};

pieceController.getPieces = (req, res, next) => {
  models.Piece.find({})
  .then(data => {
    res.locals.response = data;
    console.log('in controller', data) 
    next();      
  })
};

pieceController.createPiece = (req, res, next) => {
  // models.Piece
  console.log('create piece');
}

module.exports = pieceController
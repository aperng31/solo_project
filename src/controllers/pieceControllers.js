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
  console.log(req.body);
  const {gifList, author, pieceName} = req.body;
  models.Piece.create({gifList, author, pieceName})
    .then(res=> {
      console.log(res);
      next()
    })
}

module.exports = pieceController
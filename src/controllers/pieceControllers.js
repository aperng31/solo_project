const models = require('../models/pieceModels');


const pieceController = {};

pieceController.getPieces = (req, res, next) => {
  models.Piece.find({})
  .then(data => {
    // console.log(data);
    res.locals.response = data;
    console.log('in controller') 
    next();      
  })
};

pieceController.createPiece = (req, res, next) => {
  console.log(req.body.backgroundData);
  const {gifList, author, pieceName, backgroundData} = req.body;
  models.Piece.create({gifList, author, pieceName, backgroundData})
    .then(res => {
      // console.log(res);
      next()
    })
}

module.exports = pieceController
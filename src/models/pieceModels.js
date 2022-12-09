const mongoose = require('mongoose');
const MONGO_URI = `mongodb+srv://${process.env.API_USER}:${process.env.API_PW}${process.envMONGO_URI}.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'gifGallery'
})
.then(() => console.log('Connected to Mongo DB.'))
.catch(err => console.log(err));

const Schema = mongoose.Schema;

const pieceSchema = new Schema({
  artist: String,
  pieceTitle: String,
  backgroundData: String,
  gifList: [{
    url: String,
    xCoor: String, 
    yCoor: String,
    width: String,
  }],
});

const Piece = mongoose.model('piece', pieceSchema);

module.exports = { Piece };
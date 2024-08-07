const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
}

const movieSchema = new mongoose.Schema({
    name: String,
    year : Number,
    rating : Number
  });

 const Movie =  mongoose.model('Movie', movieSchema);
//   const FightClub = new Movie({name : "Fight Club", year : 1999 , rating : 9.2});/// it create new instance of movie
 

 Movie.insertMany([
    {name : "300", year : 2002 , rating : 9.5},
    {name : "BirdMan", year : 2007 , rating : 9.9},
    {name : "The American Psycho", year : 2017 , rating : 9.1},
    {name : "Fight Club", year : 1999 , rating : 9.2}
 ])

 




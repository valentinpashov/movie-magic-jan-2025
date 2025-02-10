import { Schema, model } from "mongoose";

//Create schema
const movieSchema = new Schema({
    title: String,
    category: String,
    genre: String,
    directory: String,
    year: Number,
    imageUrl: String,
    rating: Number,
    description: String, 
});

//Create model
const Movie = model('Movie', movieSchema);

//Export model
export default Movie;
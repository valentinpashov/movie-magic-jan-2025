import { v4 as uuid } from "uuid"; //генерира id-та
import movies from "../movies.js";

export default {
  getAll() {
    return movies;
  },


  
  findOne(movieId) {
    const result = movies.find((movie) => movie.id === movieId);

    return result;
  },

  create(movieData) {
    const newId = uuid();

    movies.push({
      id: newId,
      ...movieData,
    });

    return newId;
  },
};

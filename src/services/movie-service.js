import { v4 as uuid } from "uuid"; //генерира id-та
import movies from "../movies.js";
import Movie from "../models/Movie.js";

export default {
  getAll(filter = {}) {
  // let result =Movie.find({});   // .lean() дава данните под форма на стандартни обекти

  //  if (filter.search) {
  //    result = result.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));
  //  }
  //  if (filter.genre) {
  //    result = result.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
  //  }
  //  if (filter.year) {
  //    result = result.filter(movie => movie.year === filter.year);
  //  }

    return Movie.find({});
  },

  getOne(movieId) {
    const result = Movie.findById(movieId);

    return result;
  },

  create(movieData) {
    const newId = uuid();

    movies.push({
      id: newId,
      ...movieData,
      rating: Number(movieData.rating),
    });

    return newId;
  },
};

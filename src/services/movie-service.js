import { v4 as uuid } from "uuid"; //генерира id-та
import movies from "../movies.js";

export default {
  getAll(filter = {}) {
    let result = movies;

    if (filter.search) {
      result = result.filter((movie) => movie.title.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase()));
    }

    return result;
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
      rating: Number(movieData.rating),
    });

    return newId;
  },
};

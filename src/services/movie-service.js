import Movie from "../models/Movie.js";

export default {
  getAll(filter = {}) {
    let query = Movie.find({}); // .lean() дава данните под форма на стандартни обекти

    if (filter.search) {
      // TODO fix partial case insensitive seearch
      query = query.where({ title: filter.search }); //where = find
    }

    if (filter.genre) {
      // TODO add case inseensitve search
      query = query.where({ genre: filter.genre }); //where = find
    }
    if (filter.year) {
      query = query.where({ year: Number(filter.year) }); //where = find
    }

    return query;
  },

  getOne(movieId) {
    const result = Movie.findById(movieId);

    return result;
  },

  create(movieData) {
    const result = Movie.create({
      ...movieData,
      rating: Number(movieData.rating),
      year: Number(movieData.year),
    });

    return result;
  },
};

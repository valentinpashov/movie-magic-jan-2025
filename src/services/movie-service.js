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
  getOneWithCasts(movieId){
    return this.getOne(movieId).populate('casts');
  },
  create(movieData) {
    const result = Movie.create({
      ...movieData,
      rating: Number(movieData.rating),
      year: Number(movieData.year),
    });

    return result;
  },
  async attachCast(movieId, castId) {
    
    // !Attach #1    Използва 2 заявки до базата данни
    /*
    const movie = await Movie.findById(movieId);
    if(movie.casts.includes(castId)){
      return;
    }
    movie.casts.push(castId);

    await movie.save();

    return movie;
    */

    // !Attach #2   Използва 1 заявки до базата данни
    return Movie.findByIdAndUpdate(movieId, {$push: {casts: castId}});
  }
};

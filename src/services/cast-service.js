import Cast from "../models/Cast.js";

export default {
  getAll(filter ={}){
    let query = Cast.find({});
    
    if(filter.exclude){
      //! Variant 1 -> mongoose
      query = query.find({ _id: {$nin: filter.exclude}});
      //! Variant 1 -> mongodb 
      //query = query.nin('_id', filter.exclude);
    }

    return query;
  },
  create(castData) {
    return Cast.create(castData);
  },
};

import { Router } from "express";
import movieService from "../services/movie-service.js";

const router = Router();

router.get("/",async (req, res) => {
  // !Second solution use .lead() on query to get plain object
  const movies =await movieService.getAll();

  // !First solution -convert documents to objects
  //Convert documents to plain objects
  //const plainMovies = movies.map(m => m.toObject());

// !Third solution is to use: runtimeOptions:{allowProtoPropertiesByDefault: true,},
  res.render("home", { movies });
});

router.get("/about", (req, res) => {
  res.render("about");
});

export default router;

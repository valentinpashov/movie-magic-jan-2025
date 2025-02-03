import express from "express";
import handlebars from "express-handlebars";
import routes from "./router.js";
import showRatingHelper from "./helpers/rating-helper.js";

const app = express();

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    helpers: {
      showRating: showRatingHelper,
    }
  })
);

app.set("view engine", "hbs");
app.set("views", "./src/views"); //Показваме му къде да търси папкта views

app.use("/static", express.static("src/public")); //Показваме му къде да търси папкта public
app.use(express.urlencoded({ extended: false })); //Learn express to parse form data

app.use(routes); //  Казваме му да използва routes.js

app.listen(5001, () =>
  console.log("Server is listening on http://localhost:5001...")
);

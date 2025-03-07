import express from "express";
import handlebars from "express-handlebars";
import routes from "./router.js";
import showRatingHelper from "./helpers/rating-helper.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";   //cookie
import 'dotenv/config'   //трябва ни за .env
import { authMiddleware } from "./middlewares/auth-middleware.js";

const app = express();

//db configuration
try {
  const defaultUri = "mongodb://localhost:27017/magic-movies-jan2025";
  
  await mongoose.connect(process.env.DATABASE_URI ?? defaultUri);   //всимаме го от .env  ?? ако няма първо взимаме localUri

  console.log("DB connected succesfuly");
} catch (err) {
  console.log("Cannot connect to DB");
  console.error(err.message);
}

//handlebars configuration
app.engine("hbs", handlebars.engine({
    extname: "hbs",
    runtimeOptions:{
      allowProtoPropertiesByDefault: true,
    },
    helpers: {
      showRating: showRatingHelper,
    },
  })
);

app.set("view engine", "hbs");
app.set("views", "./src/views"); //Показваме му къде да търси папкта views

//Express configuration
app.use("/static", express.static("src/public")); //Показваме му къде да търси папкта public
app.use(express.urlencoded({ extended: false })); //Learn express to parse form data
app.use(cookieParser());      //cookie
app.use(authMiddleware);
//Setup routes
app.use(routes); //  Казваме му да използва routes.js

//Start server
app.listen(5001, () =>
  console.log("Server is listening on http://localhost:5001...")
);
 
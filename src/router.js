import { Router } from 'express';


import homeController from './controllers/home-controller.js';
//import router from './controllers/home-controller.js';
import movieController from './controllers/movie-controller.js';

const routes = Router();

routes.use(homeController);
routes.use(movieController);


routes.get('*', (req, res) => {    //За всяка страница, която не е обособена към сайта
    res.render('404');
});
 
export default routes;   //Трябва да е routes и да го няма този ред =>!!! //import router from './controllers/home-controller.js';
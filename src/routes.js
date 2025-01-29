import { Router } from 'express';
import homeController from './controllers/home-controller.js';

const routes = Router();

routes.use(homeController);

routes.get('*', (req, res) => {    //За всяка страница, която не е обособена към сайта
    res.render('404');
});

export default router;
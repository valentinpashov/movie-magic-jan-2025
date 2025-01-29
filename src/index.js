import express from 'express';
import handlebars from 'express-handlebars';
import homeController from './controllers/home-controller.js';

const app = express();

app.use('/static', express.static('src/public'));  //Показваме му къде да търси папкта public
app.use(homeController);    //Казваме му да използва тези controllers 

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');   //Показваме му къде да търси папкта views

app.get('*', (req, res) => {
    res.render('404');
});


app.listen(5001, () => console.log('Server is listening on http://localhost:5001...'));


import express from 'express';
import handlebars from 'express-handlebars';

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');   //Показваме му къде да търси папкта views

app.use('/static', express.static('src/public'));  //Показваме му къде да търси папкта public

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('*', (req, res) => {
    res.render('404');
});


app.listen(5001, () => console.log('Server is listening on http://localhost:5001...'));


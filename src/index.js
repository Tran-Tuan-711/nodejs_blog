import path from 'path';
import express from 'express';
import morgan from 'morgan';
import sass from 'sass';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

//static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Http request logger
app.use(morgan('combined'));

//Template engines
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));  

app.get('/', (req, res) => {
    res.render('home'); 
});

app.get('/new-post', (req, res) => {
    res.render('news'); 
});

app.listen(port, () => console.log(`Blog app listening at http://localhost:${port}`));

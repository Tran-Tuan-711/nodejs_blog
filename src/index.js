import path from 'path';
import express from 'express';
import morgan from 'morgan';
import sass from 'sass';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

//static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use(express.urlencoded({
        extended: true
    }));
app.use(express.json());

// Http request logger
app.use(morgan('combined'));

//Template engines
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));  

// Routes Init
routes(app);

app.listen(port, () => console.log(`Blog app listening at http://localhost:${port}`));

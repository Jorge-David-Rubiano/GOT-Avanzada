const express = require('express');
const path = require('path'); 
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const Handlebars = require('handlebars');
// Inicializaciones
 const app = express();
 require('./database');

 // Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts') ,
    partialsDir: path.join(app.get('views'), 'partials'),
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

 // Middlewares
 app.use(express.urlencoded({extended: false}));
 app.use(methodOverride('_method'));
app.use(session({
    secret : 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

 // Variables Globales

 // Rutas
 app.use(require('./routes/index'));
 app.use(require('./routes/notes'));
 app.use(require('./routes/users'));
 app.use(require('./routes/dragones'));
 app.use(require('./routes/regiones'));
 app.use(require('./routes/casas'));
 app.use(require('./routes/soldados'));

 // Archivos Estaticos
 app.use(express.static(path.join(__dirname, 'public')));

 // Inicialización de Servidor
 app.listen(app.get('port'),()=>{
 console.log('Server on port', app.get('port'));
 });

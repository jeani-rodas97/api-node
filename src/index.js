const express = require('express');
const morgan = require('morgan'); 
const app = express(); 

//Configurando puerto 
app.set('puerto', 3000);

//Espaciado en json 
app.set('json spaces', 2);

//Configurando middleware 
app.use(morgan('dev')); 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Rutas 
app.use(require('./routes/index'));
//app.use('/api/joke', require('./routes/joke')); 

//Inicir el servidor 
app.listen(app.set('puerto'), () => {
    console.log("Servidor funcionando");
});


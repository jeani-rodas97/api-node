const {Router} = require('express');
const router = Router(); 
const fetch = require('cross-fetch');
const _ = require('underscore');
const jokes = require('../info.json');
const { request } = require('express');
const { json } = require('express/lib/response');
const { token } = require('morgan');

var i = 1; 

function api(){
    fetch('https://api.chucknorris.io/jokes/random').then((response) => response.json()).then((jok) => {
        //console.log(jok.id, jok.value, jok.icon_url);
        const id = jok.id; 
        const value = jok.value; 
        const icon_url = jok.icon_url; 
        const newj = {id, value, icon_url}; 
        //console.log(newj);
        
            _.each(jokes, (joke, i) => {
                if(joke.id != jok.id ){
                    jokes.push(newj);
                    console.log(newj);
                    i++;
                }
            });
    
        
    });
};

function verificar(){
    var i = 1;
    const nj = api();
    console.log(api());
}

router.get('/', async(req, res) => {
    const respuesta = await fetch('https://api.chucknorris.io/jokes/random', { redirect: 'manual' });
    const jsonres = await respuesta.json(); 
    const id = jsonres.id; 
    const value = jsonres.value; 
    const icon_url = jsonres.icon_url; 
    let idjokes = []; 
    console.log(jsonres); 
    console.log(jsonres.id);
    //res.send("joke");
    //Recorrer el arreglo y comparar jsonre.ide 
    _.each(jokes, (joke, i) => {
        if(joke.id == id){
            
        }
        else {
            const newjock = {id, value, icon_url}; 
            idjokes.push(id);
            jokes.push(newjock);
            console.log(newjock);
        }
    });
    res.json(jokes);
    
});

module.exports= router;
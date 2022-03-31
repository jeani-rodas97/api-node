const {Router} = require('express');
const router = Router(); 
const {Fetch} = require('node-fetch'); 
const fetch = Fetch();

router.get('/', async(req, res) => {
    const respuesta = await fetch('https://api.chucknorris.io/jokes/random');
    const jsonres = await respuesta.json(); 
    console.log(jsonres); 
    res.send("joke");
});

module.exports= router;
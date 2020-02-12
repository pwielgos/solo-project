const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require ('axios');

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('got to /api/search');
    console.log('req.query', req.query);
    
    axios.get
    (`https://aggregator-data.artic.edu/api/v1/artworks/search?q=${req.query.searchterm}?limit=20`)
    //(`https://aggregator-data.artic.edu/api/v1/artworks/search?q=monet?limit=20`)
    .then(response =>{
        console.log('response.data.data', response.data);
        res.send(response.data.data) 
    }).catch(err =>{
        console.log(err);
        res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
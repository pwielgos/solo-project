const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require ('axios');

router.get('/:id', (req, res) => {
    console.log('got to /api/search/details');
    console.log('req.params', req.params);
    axios.get
    (`https://aggregator-data.artic.edu/api/v1/artworks/${req.params.id}`)
    .then(response =>{
        console.log('response.data', response.data);
        res.send(response.data.data.thumbnail);
    }).catch(err =>{
        console.log(err);
        res.sendStatus(500)
    })
});

module.exports = router;
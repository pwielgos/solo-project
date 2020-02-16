const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require ('axios');

router.get('/', (req, res) => {
    axios.get
    (`https://aggregator-data.artic.edu/api/v1/artworks?&limit=15`)
    //Cannot read property 'url' of null (when search results limit is increased)
    .then(response =>{
        console.log('response.data.data', response.data);
        res.send(response.data.data) 
    }).catch(err =>{
        console.log(err);
        res.sendStatus(500)
    })
});

module.exports = router;
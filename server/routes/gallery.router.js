const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

router.post('/', (req, res) => {
    const galleryItem = req.body.url;
    const queryText = `INSERT INTO "artwork" ("image_url") VALUES ($1)`;
    pool.query(queryText, [galleryItem])
        .then(() => { res.sendStatus(200) })
        .catch((err) => {
            console.log('error in gallery.router post', err);
            res.sendStatus(500);
        })
});

module.exports = router;
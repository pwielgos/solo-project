const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//add artwork to existing gallery
router.post('/', (req, res) => {
    console.log('post req.body', req.body);
    const image_url = req.body.url;
    const gallery_id = req.body.gallery_id;
    console.log('req.body post:', req.body);
    const queryText = `INSERT INTO "artwork" ("image_url", "gallery_id") VALUES ($1, $2)`;
    pool.query(queryText, [image_url, gallery_id])
        .then(() => { res.sendStatus(200) })
        .catch((err) => {
            console.log('error in gallery.router post', err);
            res.sendStatus(500);
        })
});

//create new gallery
router.post('/create', (req, res) => {
    console.log('post new gallery req.body', req.body);
    const newGallery = req.body.newGallery;
    const image_url = req.body.url;
    console.log('post new gallery req.body', req.body);
    const queryText = `INSERT INTO "gallery" ("gallery_name") VALUES ($1)`;
    const queryText2 = `INSERT INTO "artwork" ("image_url") VALUES ($2)`;
    pool.query(queryText, queryText2, [newGallery, image_url])
        .then(() => { res.sendStatus(200) })
        .catch((err) => {
            console.log('error in create new gallery post', err);
            res.sendStatus(500);
        })
});

module.exports = router;
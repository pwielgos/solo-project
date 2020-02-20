const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

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

module.exports = router;
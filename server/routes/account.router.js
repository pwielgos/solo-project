const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//user home page - just displays gallery name for now
router.get('/', (req, res) => {
  const queryText = `SELECT "gallery_name", "id", "key_image" from "gallery";`
  console.log('in account GET', req.body)
  pool.query(queryText)
    .then(result => {
      console.log(result.rows)
      res.send(result.rows)
    }).catch(err => {
      console.log('error in gallery names GET', err)
      res.sendStatus(500);
    })
})

//gets images from a specific gallery on click of 
//the gallery name in user home page
router.get('/gallery/:id', (req, res) => {
  const queryText = 
  `SELECT "artwork"."image_url", "gallery"."gallery_name", "gallery"."id"
  FROM "artwork" JOIN "gallery"
  ON "artwork"."gallery_id"="gallery"."id"
  WHERE "gallery"."id" = $1;
  `
  // `SELECT "image_url" from "artwork"
  // WHERE "gallery_id"=$1;`
  console.log('in account/gallery GET', req.params)
  //console.log('req.params.id', [req.params.id]);
  pool.query(queryText, [req.params.id])
    .then(result => {
      console.log(result.rows)
      res.send(result.rows)
    }).catch(err => {
      console.log('error in user galleries GET', err)
      res.sendStatus(500);
    })
})

//edits gallery titles
router.put('/gallery/:id', (req, res) => {
  console.log('ready to update gallery name', req.params.id);
  console.log('req.body', req.body);
  const queryText = 
  `UPDATE "gallery"
  SET "gallery_name"=$1
  WHERE "gallery"."id"=$2;
  `
  pool.query(queryText, [req.body.galleryName, req.params.id])
    .then(result => {
      console.log(result.rows)
      res.send(result.rows)
    }).catch(err => {
      console.log('error in user galleries PUT', err)
      res.sendStatus(500);
    })
})

//delete galleries
router.delete('/gallery/:id', (req, res) => {
  const queryText = 
  `DELETE FROM "gallery" WHERE "id"=$1;`
  pool.query(queryText, [req.params.id])
    .then(result => {
      console.log(result.rows)
      res.send(result.rows)
    }).catch(err => {
      console.log('error in user galleries DELETE', err)
      res.sendStatus(500);
    })
})

module.exports = router;
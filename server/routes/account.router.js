const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  const queryText = `SELECT "gallery_name", "id" from "gallery";`
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

router.get('/gallery/:id', (req, res) => {
  const queryText = 
  `SELECT "image_url" from "artwork"
  WHERE "gallery_id"=$1;` 
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

module.exports = router;
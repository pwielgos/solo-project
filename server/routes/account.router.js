const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    const queryText = `SELECT "gallery_name" from "gallery";`
    console.log('in account router.get', req.body)
    pool.query(queryText)
      .then(result => {
        console.log(result.rows)
        res.send(result.rows)
      }).catch(error => {
        console.log('error in movieList GET', error)
        res.sendStatus(500);
      })
  })

module.exports = router;
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');




router.get('/', (req, res) => {
    let answers = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(answers)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        res.sendStatus(500);
    })
  });
  

  router.post('/', (req, res) => {
    
    let feedback = req.body;
    let data = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4)`;
    //run query using variable values and send confirmation
    pool.query(data, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then(result => {
        res.sendStatus(201)
    })
    .catch(error => {
        res.sendStatus(500)
    })
})
  
  //make available to other files
  module.exports = router;



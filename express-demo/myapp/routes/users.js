const express = require('express');

const users = [
  { name: 'Allen', age: 25 },
  { name: 'Bill', age: 18 },
  { name: 'Carol', age: 20 },
  { name: 'Danny', age: 50 },
];

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res/* , next */) => {
  res.send(JSON.stringify(users));
});

module.exports = router;

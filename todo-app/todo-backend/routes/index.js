const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const { getAsync } = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++
  const addedTodos = await getAsync('added_todos')

  res.send({
    ...configs,
    visits,
    added_todos: Number(addedTodos) || 0
  });
});

module.exports = router;

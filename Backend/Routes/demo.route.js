const express = require('express');
const router = express.Router();
const { addDemo } = require('../Controller/demo.Ctl');

router.post('/add-demo', addDemo)

module.exports = router;
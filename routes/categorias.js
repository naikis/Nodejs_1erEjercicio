const express = require('express');
const router = express.Router();
const {get} = require('./../models/categorias');

const get = async(req, res) => {
    const categorias = await get();
    console.log(categorias);
    res.render('categorias', {categorias});
}

const edit = (req, res) => {
    res.end();
}

router.get('/', get);
router.get('/single/:id', single);
router.get('/edit', edit);
module.exports = router;
const express = require('express');
const router = express.Router();
const model = require('./../../models/categorias');

const get = async(req,res) => {
    const categorias = await model.get();
    res.render('adminCategorias' , {categorias});
}
const showCreate = async (req, res) => {
    const categorias = await model.get();
    console.log(categorias);
    res.render('createCategoria', {categorias});
}
const create = async (req, res) => {
    const categoria = req.body;
    console.log(categoria);
    const {insertId} = await model.create(categoria);
    console.log(insertId);
    res.redirect('/admin/categorias');
}
const update = async (req, res) => {
    const {id} = req.params;
    const categoria = req.body;
    console.log(categoria);
    const {insertId} = await model.update(id, categoria);
    console.log(insertId);
    res.redirect('/admin/categorias');
}
const showUpdate = async (req, res) => {
    const {id} = req.params;
    const [categoria] = await model.single(id);
    res.render('updateCategoria', {categoria});
}
const del = async (req, res) => {
    const {id} = req.params;
    const {insertId} = await model.del(id);
    console.log(insertId);
    res.redirect('/admin/categorias');
}
router.get('/', get);
router.get('/create', showCreate);
router.post('/create', create);
router.get('/update/:id', showUpdate);
router.post('/update/:id', update);
router.get('/delete/:id', del);
module.exports = router;
const express = require('express');
const router = express.Router();
const {single, update} = require('./../models/usuarios');

const getUser = async(req, res) => {
    const [usuario] = await single(req.session.user);
    res.render('usuario', {usuario});
}
const edit = async (req, res) => {
    const {id} = req.params;
    const [usuario] = await update(id);
    res.render('updateUsuario', {usuario});
}

router.get('/', getUser);
router.get('/edit', edit);
module.exports = router;
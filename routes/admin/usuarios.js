const express = require('express');
const router = express.Router();

const showUser = (req, res) => {
    res.redirect('/usuarios');
}
const edit = async (req, res) => {
    const {id} = req.params;
    const usuario = req.body;
    console.log(usuario);
    const {insertId} = await model.update(id, usuario);
    console.log(insertId);
    res.redirect('/admin/usuarios');
}
const showedit = async (req, res) => {
    const {id} = req.params;
    const [usuario] = await model.single(id);
    res.render('updateUsuario', {usuario});
}

router.get('/', showUser);
router.get('/edit', edit);
router.get('/edit', showedit);
module.exports = router;
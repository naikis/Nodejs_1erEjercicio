const express = require('express');
const routes = express.Router();

const contact = (req, res) => {
    res.redirect('/contacto');
};

routes.get('/', contact);
module.exports = routes;
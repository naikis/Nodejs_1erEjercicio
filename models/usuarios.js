const pool = require('./../utils/bd');

const getAll = async() => {
    const query = "SELECT id, username, mail, telefono, admin, habilitado FROM ??";
    const params = [process.env.T_USUARIOS];
    const rows = await pool.query(query, params);
    return rows;
}
const create = async(obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_USUARIOS, obj];
    return await pool.query(query, params);
}
const verify = async(uid) => {
    const query = "UPDATE ?? SET habilitado = 1 WHERE confirmacionCorreo = ?"
    const params = [process.env.T_USUARIOS, uid];
    return await pool.query(query, params);
}
const auth = async(username, pass) => {
    const query = "SELECT id, admin FROM ?? WHERE username = ? AND pass = ? AND habilitado = 1 AND eliminado = 0";
    const params = [process.env.T_USUARIOS, username, pass];
    return await pool.query(query, params);
}
const single = async(id) => {
    const query = "SELECT * FROM ?? WHERE id = ?";
    const params = [process.env.T_USUARIOS, id];
    return await pool.query(query, params);
}

const update = async(id, obj) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.T_USUARIOS, obj, id];
    return await pool.query(query, params);
}
const all = async() => {
    const query = "SELECT * FROM ??";
    const params = [process.env.T_USUARIOS];
    return await pool.query(query, params);
}
module.exports = {getAll, create, verify, auth, single, update, all}


const pool = require('./../utils/bd');

 const get = async() => {
     const query = "SELECT * FROM ??";
     const params = [process.env.T_CATEGORIAS]
     return await pool.query(query, params);
 }
 const single = async(id) => {
    const query = "SELECT * FROM ?? WHERE id = ?";
    const params = [process.env.T_CATEGORIAS, id];
    const rows = await pool.query(query, params);
    return rows;
}
 const create = async(obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_CATEGORIAS, obj];
    return await pool.query(query, params);
}
const update = async(id, obj) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.T_CATEGORIAS, obj, id];
    return await pool.query(query, params);
}
const del = async(id) => {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [process.env.T_CATEGORIAS, id];
    return await pool.query(query, params);
}


module.exports = {get, single, create, update, del}
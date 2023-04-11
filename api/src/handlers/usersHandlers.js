//necesito un hadler que maneje la ruta

const { createUser, getUserById, searchUserByName, getAllUsers } = require('../controllers/userController')

const getUsersHandler = async (req, res) => {
    //llamar a la funcion que obtiene los datos de la BDD
    //llamar a la funcion que obtenga los datos de la API externa
    //unir los datos unificando el formato
    //cuando tenga los datos , responder con los datos 
    const { name } = req.query;

    const results = name ? await searchUserByName(name) : await getAllUsers();
    res.status(200).json(results);

}
//tengo que poder darme cuenta que tipo de id estoy hablando, nuestro id es UUID
//puede que lleue un Id que no existe 
const getUserHandlerId = async (req, res) => {
    const { id } = req.params;
    //para saber a donde va ir a buscar la info validamos el params
    const source = isNaN(id) ? "bdd" : "api";
    try {
        //mandamos por parametro el id y a donde buscara "source"
        const user = await getUserById(id, source);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}
const createUsersHandler = async (req, res) => {
    const { name, email, phone } = req.body;
    try {

        const newUser = await createUser(name, email, phone);
        res.status(200).json("Create user perfect");

    } catch (error) {
        res.status(400).json({ error: error.message })
    }


}
module.exports = {
    getUsersHandler, getUserHandlerId, createUsersHandler
} 
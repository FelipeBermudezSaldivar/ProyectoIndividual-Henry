const { User, Post } = require("../db")
const axios = require('axios')


const cleanArray = (arr) =>
    arr.map(elem => {
        return {
            id: elem.id,
            name: elem.name,
            email: elem.email,
            phone: elem.phone,
            created: false
        };
    });


const cleanArrayById = (arr) => {
    return {
        id: arr.id,
        name: arr.name,
        email: arr.email,
        phone: arr.phone,
        created: false
    };
}


//validamos donde va a ir a buscar a traves del ID o UUID de la base de datos
const getUserById = async (id, source) => {


    if (source === "api") {
        const apiUserById = (await axios(`https://jsonplaceholder.typicode.com/users/${id}`)).data;
        //mandamos el objeto de la api para que lo limpie a los datos que requerimos

        const apiUserId = cleanArrayById(apiUserById);
        return apiUserId;
    } else {
        const dataBaseUserById = await User.findByPk(id, {
            include: {
                model: Post,
                attributes: ["title", "body"]
            }
        });
        return dataBaseUserById;
    }

};
//create en una linea
const createUser = async (name, email, phone) => await User.create({ name, email, phone });
//este busca por name en la base de datos o en la api
const searchUserByName = async (name) => {
    //obtenemos los datos de la base de datos 
    const dataBaseUsers = await User.findAll({
        where: {
            name: name
        }
    })
    //traemos los usuarios de la base de la api
    const apiUsersRaw = (await axios('https://jsonplaceholder.typicode.com/users')).data;
    //limpiamos y pisamos para que coincidan con los atrtibutos de BDD
    const apiUsers = cleanArray(apiUsersRaw);

    //usamos un filter para igualar al nombre y retornamos 
    const filterApi = apiUsers.filter(user => user.name === name);

    //retornamos un arreglo con los datos de la BDD y de la API
    return [...dataBaseUsers, ...filterApi];
}
//tiene que traer todos los usarios de
const getAllUsers = async () => {
    //buscar en la bd
    const dataBaseUsers = await User.findAll();
    //buscar en la api
    const apiUsersRaw = (await axios('https://jsonplaceholder.typicode.com/users')).data;
    const apiUsers = cleanArray(apiUsersRaw);
    return [...dataBaseUsers, ...apiUsers];

}

module.exports = {
    createUser,
    getUserById,
    searchUserByName,
    getAllUsers
};
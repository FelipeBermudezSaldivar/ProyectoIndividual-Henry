const { searchDietsByName, getAllDiets } = require('../controllers/dietsController')

const getDiets = async (req, res) => {
    const { name } = req.query;
    const results = name ? await searchDietsByName(name) : await getAllDiets();
    res.status(200).send(results);
};
module.exports = { getDiets };
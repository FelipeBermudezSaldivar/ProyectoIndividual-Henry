const { Router } = require('express');
const { getUsersHandler, getUserHandlerId, createUsersHandler } = require('../handlers/usersHandlers');
const { validateCreate } = require('../middlewares/validateUsers')


const usersRouter = Router();

usersRouter.get('/', getUsersHandler);

usersRouter.get('/detail/:id', getUserHandlerId)
usersRouter.post('/', validateCreate, createUsersHandler)

module.exports = usersRouter;
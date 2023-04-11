const { Router } = require('express');
const usersRouter = require('./usersRouter')
const postsRouter = require('./postsRouter');
const recipesRouter = require('./recipesRouter');
const dietsRouter = require('./dietsRouter')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//metodo get para probar


router.use('/user', usersRouter);
router.use('/post', postsRouter);
router.use('/recipes', recipesRouter);
router.use('/diets', dietsRouter);

/* router.use('/posts', postsRouter); */

module.exports = router;

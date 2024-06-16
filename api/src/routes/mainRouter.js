const { Router } = require('express');

const {
    getPokemonHandler,
    getPokemonBdHandler,
    getPokemonByIdHandler,
    getPokemonByNameHandler,
    postPokemonHandler} = require('../handler/pokemonHandler');
const { getTypesHandler } = require('../handler/typeHandler');

const mainRouter = Router();

mainRouter.get('/', getPokemonHandler);
mainRouter.get('/db', getPokemonBdHandler);
mainRouter.get('/types', getTypesHandler);
mainRouter.get('/name', getPokemonByNameHandler);
mainRouter.get('/:id', getPokemonByIdHandler);

mainRouter.post('/', postPokemonHandler);

    


//mainRouter.use('/', pokemonRouter)
// mainRouter.use('/pokemons', pokemonRouter);
// mainRouter.use('/types', typeRouter)

module.exports = mainRouter;

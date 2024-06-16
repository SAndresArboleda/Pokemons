const { getPokemons, getPokemonsById, postPokemons, getPokemonsBd, getPokemonByName} = require('../controller/pokemonController')

const getPokemonHandler = async (req, res) => {
    const { } = req.query
    try {
        const response = await getPokemons()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

const getPokemonBdHandler = async (req, res) => {
    const { } = req.query
    try {
        const response = await getPokemonsBd()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).send({ error: error.message, msg:`Error en bd Pokemons` })
    }
}

const getPokemonByNameHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const response = await getPokemonByName(name)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).send({error:error.message, msg:`El nombre ${name} es incorrecto`}) //name?name=charmander
    }
}

const getPokemonByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getPokemonsById(id)
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
        res.status(404).send({ error: error.message, msg: `Pokemon con id: ${id} no existe` })
    }
}

const postPokemonHandler = async (req, res) => {
    const { name, image, hp, attack, defense, speed, height, weight, types } = req.body
    if (name && image && hp && attack && defense && speed && height && weight && types)
        try {
            const response = await postPokemons(name, image, hp, attack, defense, speed, height, weight, types)
            res.status(200).json(response)
        } catch (error) {
            res.status(400).send({ error: error.message + " no se creó", msg: "Falta enviar datos obligatorios" })
        }
}

module.exports = {
    getPokemonHandler,
    getPokemonBdHandler,
    getPokemonByIdHandler,
    getPokemonByNameHandler,
    postPokemonHandler,

}
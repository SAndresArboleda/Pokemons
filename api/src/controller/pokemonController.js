const axios = require('axios');
const { Pokemon, Type } = require('../db');
const { Op } = require('sequelize');


const getPokemons = async () => {
    const listData = (await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=65`)).data;
    const pokemonPromises = listData.results.map(async (ele) => await axios.get(ele.url));
    const pokemonResponses = await Promise.all(pokemonPromises);
   
    const pokemons = pokemonResponses.map(response => {
        const data = response.data;
        
        return {
            id: data.id,
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight,
            types: data.types.map(t => t.type.name),
        };
    });
    const pokemonBd = await Pokemon.findAll({
        include: Type
    });
    return [...pokemonBd, ...pokemons]
}

const getPokemonsBd = async () => {
    const pokemonsBd = await Pokemon.findAll({
        include: Type
    })
    
    return pokemonsBd;
}

const getPokemonByName = async (name) => {

    const pokemonDb = await Pokemon.findOne({ where: { name: name} })
    if (pokemonDb) { 
        return pokemonDb 
    }
    name = name.toLowerCase();

    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`); ////name?name=charmander
    if (data.name) {
        const pokemon = {
            id: data.id,
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight,
            types: data.types.map(type => type.type.name),
        }
        console.log(pokemon);
        return pokemon;
    }
}

const getPokemonsById = async (id) => {

    if (isNaN(id)) {
        const pokemonBd = await Pokemon.findByPk(id,{
            include: Type
        })
        return pokemonBd;
    } else {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = {
            id: data.id,
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight,
            types: data.types.map(type => type.type.name),
        }
        return pokemon;
    }
}

const getTypesById = async (id) => {
    const typeBd = await Type.findByPk(id)

    return typeBd
}

const postPokemons = async (name, image, hp, attack, defense, speed, height, weight, typeId) => {
    const newPokemon = await Pokemon.create({ name, image, hp, attack, defense, speed, height, weight })
    await newPokemon.setTypes(typeId)

    return newPokemon
}

module.exports = {
    getPokemons,
    getPokemonsBd,
    getPokemonByName,
    getPokemonsById,
    postPokemons
}
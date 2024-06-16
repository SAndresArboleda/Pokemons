import axios from 'axios'

export const getPokemons = () => {
    try {
        return async (dispatch) => {
            const  {data}  = (await axios.get('http://localhost:3001/'));
            return dispatch({
                type: 'GET_POKEMONS',
                payload: data
            });
        };
    } catch (error) {
        console.log(error);
    }
}

export const getPokemonByName = (name) => {
    try {
        return async (dispatch) => {
            const { data } = await axios.get(`http://localhost:3001/name?name=${name}`);
            return dispatch({
                type: 'GET_BY_NAME',
                payload: data
            });
        };
    } catch (error) {
        console.log(error);
    }
}

export const getPokemonById = (id) => {
    try {
        return async (dispatch) => {
            const { data } = await axios.get(`http://localhost:3001/${id}`);
            return dispatch({
                type: GET_BY_ID,
                payload: data
            });
        };
    } catch (error) {
        console.log(error);
    }
}

export const orderPokems = (order) => {
    return {
        type: GET_ORDER,
        payload: order
    }
};


export function getPokemsApi() {
    return async function (dispatch) {
        const response = await axios(`http://localhost:3001/`);
        let pokApi = response.data.filter((ele) => {
            let result = typeof ele.id === 'number'
            return result;
        });
        return dispatch({
            type: GET_POKEMONS_API,
            payload: pokApi
        })
    };
}

export function getPokemsBD() {
    return async function (dispatch) {
        const response = await axios(`http://localhost:3001/`);
        let pokBd = response.data.filter((ele) => {
            let result = typeof ele.id !== 'number'
            return result;
        });
        return dispatch({
            type: GET_POKEMONS_BD,
            payload: pokBd
        })
    };
}

export function getTypes() {
    try {
        return async (dispatch) => {
            const { data } = await axios.get('http://localhost:3001/types');
            const alltypes = data.map(e => e.name)
            return dispatch({
                type: 'GET_TYPES',
                payload: alltypes
            });
        };
    } catch (error) {
        console.log(error);
    }
}

export function updateByTypes(pokListParam) {
    return {
        type: UPDATE_BY_TYPE,
        payload: pokListParam
    }
}

export const createPokemon = (payload) => {
    return async function (dispatch) {
        try {
            const response = await axios.post("http://localhost:3001/", payload);

            alert("Pokemon creado correctamente con ID: " + response.data.id);
            return dispatch({
                type: CREATE_POKEMON,
                payload: response.data.id
            })
        } catch (error) {
            console.log(error)
            alert("Pokemon no creado")
        }
    }
}

export const removePokemons = (newList) => {
    return{
        type: REMOVE_POK,
        payload: newList
    }
}

export const GET_POKEMONS = "GET_POKEMONS"
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_BY_ID = "GET_BY_ID"
export const GET_ORDER = "GET_ORDER"
export const GET_POKEMONS_API = "GET_POKEMONS_API"
export const GET_POKEMONS_BD = "GET_POKEMONS_BD"
export const GET_TYPES = "GET_TYPES"
export const UPDATE_BY_TYPE = "UPDATE_BY_TYPE"
export const CREATE_POKEMON = "CREATE_POKEMON"
export const REMOVE_POK = "REMOVE_POK"


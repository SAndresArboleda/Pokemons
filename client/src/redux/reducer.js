import {
    GET_POKEMONS,
    GET_BY_NAME,
    GET_BY_ID,
    GET_ORDER,
    GET_POKEMONS_API,
    GET_POKEMONS_BD,
    GET_TYPES,
    UPDATE_BY_TYPE,
    CREATE_POKEMON,
    REMOVE_POK
} from './action'


const initialState = {
    pokemonList: [],
    currentPokemon: [],
    pokemonsType: [],
    pokemonId: '',
    allPokemonCopu: [],
    pokemonFilterTypeList: [],
    allPokemon: [],
    removePokemon: [],


}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_POKEMONS:
            return {
                ...state,
                pokemonList: action.payload,
                allPokemon: action.payload,
                removePokemon: action.payload,
            }

        case GET_BY_NAME:
            return {
                ...state,
                pokemonList: [action.payload],
            }

        case GET_BY_ID:
            return {
                ...state,
                currentPokemon: action.payload,
            }

        case GET_ORDER:

            let orderCopy = [...state.pokemonList];
            if (action.payload === 'name_asc') {
                orderCopy.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    else return -1;
                });
            } else if (action.payload === 'name_des') {
                orderCopy.sort((a, b) => {
                    if (a.name < b.name) return 1;
                    else return -1;
                });
            } else if (action.payload === 'atac_asc') {
                orderCopy.sort((a, b) => {
                    if (a.attack > b.attack) return 1;
                    else return -1;
                });
            } else if (action.payload === 'atac_des') {
                orderCopy.sort((a, b) => {
                    if (a.attack < b.attack) return 1;
                    else return -1;
                });
            }
            return {
                ...state,
                pokemonList: orderCopy,
            }
        case GET_POKEMONS_API:
            return {
                ...state,
                pokemonList: action.payload,
            }
        case GET_POKEMONS_BD:
            return {
                ...state,
                pokemonList: action.payload,
            }

        case GET_TYPES:
            return {
                ...state,
                pokemonsType: action.payload
            }
        case UPDATE_BY_TYPE:
            return {
                ...state,
                pokemonList: action.payload

            }

        case CREATE_POKEMON:
            return {
                ...state,
                pokemonId: action.payload
            }

        case REMOVE_POK:
            return {
                ...state,
                pokemonList:action.payload
            }

        default:
            return state  //en caso de que ningun caso ingrese debe retornar algo.
    }
}



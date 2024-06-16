import {createStore, applyMiddleware, compose} from 'redux';
import {pokemonReducer} from './reducer';
import thunk from 'redux-thunk'

 

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( pokemonReducer, composeEnhacer(applyMiddleware(thunk)));

export default store

//rootReducer, es el reducer raiz.
//composeWithDevTools, es una funcion extra que queremos que realice o con la que cuente nuestra store
//thunk es un middlware , es una funcion para que redux trabaje con asincronia.
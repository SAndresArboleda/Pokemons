import { Link } from "react-router-dom";
import './card.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePokemons } from "../../redux/action";


const Card = ({ pok }) => {

    const dispatch = useDispatch();
    const [characters, setCharacters] = useState([]);
    let localPokemonList = useSelector((state) => state.pokemonList)

    const { id, name, image, types, attack, Types } = pok

    var Types2 = ''

    if (Types) {
        Types2 = Types.map((element => element = element['name'])).join(", ")
    } else {
        Types2 = types.map((element => element = element)).join(", ")
    }

    let clase = '';
    if (types) {
        clase = types[0] ? types[0] : 'tarjeta';
    } else {
        clase = "tarjeta";
    }

    const onClose = (e) => {
        e.preventDefault()
        localPokemonList = localPokemonList.filter((pok) => pok.id !== Number(id))
        dispatch(removePokemons(localPokemonList))
    }

    // const onClose = (e) => {
    //     e.preventDefault();
    //     localPokemonList = localPokemonList.filter(char => char.id !== Number(id));
    //     dispatch(removePokemons(localPokemonList));
    // };

    return (
        <div className="cardContenedor">
            <div className={[clase]} >
                <button onClick={onClose} className="cardBotonCierre">X</button>
                <Link to={`/detail/${id}`}>
                    <div className=" contenedorCard">
                        <div className="textCardTitle">
                            <h2>{name}</h2>
                            <div className="textCardCaract">
                                <h4>Tipo: {Types2}</h4>
                                <h4>Ataque: {attack}</h4>
                            </div>
                        </div>
                        <div>
                            <img src={image} alt="centered imag" className="img_tarjeta" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Card
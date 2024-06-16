import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { validation } from "./validaton";
import { createPokemon, getTypes } from "../../redux/action";
import './create.css'

const Create = () => {

    const types = useSelector(state => state.pokemonsType)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [tiposListState, setTiposListState] = useState([]);

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch])

    const [newPokemon, setNewPokemon] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image: "",
        types: [],
    });

    const [errors, setErrors] = useState({})

    useEffect(() => {
        setErrors(validation(newPokemon));
    }, [newPokemon]);


    const handleCreation = (e) => {
        e.preventDefault();
        dispatch(createPokemon(newPokemon));
        navigate('/home');
    }

    const handleChange = ({ target }) => {

        setErrors(validation({
            ...newPokemon,
        }));

        setNewPokemon({
            ...newPokemon,
            [target.name]: target.value
        })
    }

    const agragarTipo = (e) => {
        e.preventDefault();
        var select = document.getElementById("seleccionMultiple");
        if (tiposListState.indexOf(1 + Number(select.value)) < 0) {
            var newList = tiposListState;
            newList.push(1 + Number(select.value));
            setTiposListState(newList);
            setNewPokemon({
                ...newPokemon,
                ['types']: newList
            })
        }
    }

    const removeType = (e) => {
        e.preventDefault();
        let newList = tiposListState.filter(element => element !== Number(e.target.title))
        setTiposListState(newList);
    }

    const buttonDisabled = () => {
        let btn = true;
        if (Object.keys(errors).length === 0) {
            btn = false;
        }
        return btn;
    }

    return (

        <div id="create">
            <section className="contBoton" >
                <div className="botonCreate">
                    <Link to="/home"><button className="botonHome" >Volver al Home</button></Link>
                </div>
            </section>
            <section id="formulario">
                <div className="contFormulario">
                    <form className="caracteristicas">
                        <div>
                            <div><h2>Crea Tu Pokémon</h2></div>
                            <label className="label">
                                <input className="input" type="text" placeholder=" " name="name"
                                    onChange={handleChange} value={newPokemon.name} />
                                {errors.name ? <p>{errors.name}</p> : null}
                                <span className="label__name">Nombre</span>
                            </label>
                            <label className="label">
                                <input className="input" type="text" placeholder=" " name="hp"
                                    min="1" max="500" onChange={handleChange} value={newPokemon.hp}
                                />{errors.hp ? <p>{errors.hp}</p> : null}
                                <span className="label__name">Vida</span>
                            </label>
                            <label className="label">
                                <input className="input" type="text" placeholder=" " name="attack"
                                    min="1" max="500" onChange={handleChange} value={newPokemon.attack}
                                />{errors.attack ? <p>{errors.attack}</p> : null}
                                <span className="label__name">Ataque</span>
                            </label>
                            <label className="label">
                                <input className="input" type="text" placeholder=" " name="defense"
                                    min="1" max="500" onChange={handleChange} value={newPokemon.defense}
                                />{errors.defense ? <p>{errors.defense}</p> : null}
                                <span className="label__name">Defensa</span>
                            </label>
                            <label className="label">
                                <input className="input" type="text" placeholder=" " name="speed"
                                    min="1" max="500" onChange={handleChange} value={newPokemon.speed}
                                />{errors.speed ? <p>{errors.speed}</p> : null}
                                <span className="label__name">Altura</span>
                            </label>
                            <label className="label">
                                <input className="input" type="text" placeholder=" " name="height"
                                    min="1" max="500" onChange={handleChange} value={newPokemon.height}
                                />{errors.height ? <p>{errors.height}</p> : null}
                                <span className="label__name">Velocidad</span>
                            </label>
                            <label className="label">
                                <input className="input" type="text" placeholder=" " name="weight"
                                    min="1" max="500" onChange={handleChange} value={newPokemon.weight}
                                />{errors.weight ? <p>{errors.weight}</p> : null}
                                <span className="label__name">Peso</span>
                            </label>
                            <label className="label">
                                <input className="input" type="url" placeholder=" " name="image"
                                    min="1" max="500" onChange={handleChange} value={newPokemon.image}
                                />{errors.image ? <p>{errors.image}</p> : null}
                                <span className="label__name">URL Imagen</span>
                            </label>

                            <div className="agregarTipos">
                                <label>Tipos</label>
                                <select id="seleccionMultiple" name="types">
                                    <option className="seleccionar">seleccione tipo...</option>
                                    {types?.map((type, id) => {
                                        return (
                                            <option className="seleccionado" value={id} key={id} >{type}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="crearAgregarTipo">
                                <button className="btnAgregar" onClick={agragarTipo} >Agregar</button>
                                {tiposListState?.map((tipo, id) => {
                                    return (
                                        <h3 title={tipo} key={id} onClick={removeType}>{types[tipo - 1]} </h3>
                                    )
                                })}
                            </div>
                            <div className="botonCrearPokemon">
                                <button className="btnCrear" type="submit" onClick={handleCreation} disabled={buttonDisabled()}><a href="">Crear nuevo Pokemon</a></button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Create;
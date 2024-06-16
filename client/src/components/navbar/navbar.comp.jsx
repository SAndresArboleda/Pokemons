import { Link } from "react-router-dom";
import { getPokemonByName, getPokemons, getPokemsApi, getPokemsBD, getTypes, orderPokems, updateByTypes } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './navbar.css'



const Navbar = () => {

    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch])

    const pokemonsType = useSelector((state) => state.pokemonsType)
    const allPokemon = useSelector((state) => state.allPokemon)

    const [searchString, setSearchString] = useState("");

    const handleChange =(e)=>{ //me muestra lo que escribo en la barra de busqueda
        e.preventDefault()
        setSearchString(e.target.value)
    }

    const handleSubmit = (e)=>{  //cuando le de en el boton input me muestre lo que busco en el searchString
        e.preventDefault()
        dispatch(getPokemonByName(searchString))
    }

    function handleOrder(e) {
        const value = e.target.value;
        dispatch(orderPokems(value))
    }

    function handleListOption(param) {
        switch (param) {
            case "api":
                dispatch(getPokemsApi());
                break;
            case "bd":
                dispatch(getPokemsBD());
                break;
            case "all":
                dispatch(getPokemons());
                break;
            default:
                break;
        }
    }


    function typeChange(e) {

        const selectType = e.target.value
        const pokList = allPokemon;
        const filteredPokemApi = pokList.filter((ele) => ele.types?.includes(selectType));
        setCurrentPage(currentPage);
        dispatch(updateByTypes(filteredPokemApi))
    }

    return (
        <nav className="contNavBar">
            <div className="navBar" >
                <button type="button" onClick={() => handleListOption('all')} className="pokedex">Pokédex</button>
                <Link to='/create'><button className="crarPokemon">CREAR POKEMON</button></Link>
            </div>

            <div className="btnsNavBar">
                <div>
                    <form  className="formBuscar">
                        <input placeholder="Search by name..." type="search" className="inputBuscar" onChange={handleChange}/>
                        <button type="submit"  className="btnBuscar" onClick={handleSubmit}>Buscar</button>
                    </form>
                </div>
                <div className="ordenNameAtaque">
                    <select className="navbarSelectOrder" name="order" id="order" onChange={handleOrder}>
                        <option >Ordenar por:</option>
                        <option value="name_asc" >Nombre Ascendente</option>
                        <option value="name_des" >Nombre Descendente</option>
                        <option value="atac_asc" >Ataque Ascendente</option>
                        <option value="atac_des" >Ataque Descendente</option>
                    </select>
                </div>
                <div>
                    <button type="button" onClick={()=> handleListOption( 'api')} className="btnApiBD" >Api</button>
                    <button type="button" onClick={()=> handleListOption( 'bd')} className="btnApiBD" >Base Datos</button>
                </div>
                <div>
                    <select className="navbarSelectTypes" name="types" onChange={typeChange} >
                        <option >seleccione tipo...</option>
                        {pokemonsType?.map((type, id) =>(
                                <option value={type} key={id} >{type} </option>
                            ))}
                    </select>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
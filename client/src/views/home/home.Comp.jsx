import { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/action";
import Navbar from "../../components/navbar/navbar.comp";
import Cards from "../../components/cards/cards.comp";
import './home.css'

const Home = () => {
    const dispatch = useDispatch();
    const pokemonList = useSelector((state) => state.pokemonList)

    useEffect(() => { //para que nuestra action sea ejecutada cuando la pagina se carga por primera vez hacemos el dispach dentro de useEffect
        dispatch(getPokemons());
        // return (()=>{   //consultar como hacerlo para el PI
        //   clearDetail()  //esto es para limpiar el estado cuando pase a otra pagina
        // })
      }, [dispatch]); //esto es array de dependencia, para decir que se ejecute la funcion getPokemons, al momento de hacer el dispach. 
    


    return (
        <div className="home">
            <div className="Navbar">
            <Navbar />
            </div>
            <div className="cards8">
            <Cards pokemonList={pokemonList}/>
            </div>
        </div>
    )
}

export default Home;
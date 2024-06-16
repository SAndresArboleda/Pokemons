import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPokemonById } from '../../redux/action';
import './detail.css'


const Detail = () => {
    const dispatch = useDispatch()
    const currentPokemon = useSelector((state) => state.currentPokemon)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getPokemonById(id))
    }, [dispatch, id]);


    const poke = currentPokemon;
    let typesFinal = '';
    if (poke.types) {
        typesFinal = poke.types.join(", ")
    } else if (poke.Types) {
        let typesNames = poke.Types.map((element) => element['name'])
        typesFinal = typesNames.join(", ")
    }
    let clase = '';
    if (poke.types) {
        clase = poke.types[0] ? poke.types[0] : 'normal';
    } else if (poke.Types) {
        clase = poke.Types[0] ? poke.Types[0].name : 'normal';
    } else {
        clase = "tarjetadetail";
    }

    return (
        <section id='detail' className='fondoPokedex'>
            <div>
                <Link to={"/home"}><button className="botonHomeDetail" >Volver al Home</button></Link>
            </div>
            <div className='detailCarta'>
                <div className={[clase]} >
                    <div className="card-Detail" >
                        <img src={poke.image} className="detailImagen" />
                        <div className='caracteristicasDetail'>
                            <h1 className='tituloDetail'>{poke.name}</h1>
                            <p>Vida: {poke.hp}</p>
                            <p>Ataque: {poke.attack}</p>
                            <p>Defenza: {poke.defense}</p>
                            <p>Velocidad: {poke.speed}</p>
                            <p>Altura: {poke.height}</p>
                            <p>Peso: {poke.weight}</p>
                            <p>Tipo: {typesFinal}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Detail;
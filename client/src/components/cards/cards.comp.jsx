import Card from "../card/card.comp"
import { useState } from "react";

import './cards.css'

const Cards = ({ pokemonList }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const pokemonsPerPage = 12;

    const indexOfLastPokem = currentPage * pokemonsPerPage;
    const indexOfFirstPokem = indexOfLastPokem - pokemonsPerPage;
    const currentPokems = pokemonList?.slice(indexOfFirstPokem, indexOfLastPokem);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="ContenCard">

            <div className="BotonPevNext">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="btn">Prev</button>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastPokem >= pokemonList?.length} className="btn">Next</button>
            </div>

            <div className="contenedorCards">
                {currentPokems?.map(pok =>
                    <Card pok={pok} key={pok.id} />
                )}
            </div>
        </div>
    )
}

export default Cards
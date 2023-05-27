import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import Card from '../Card/Card'

function ContenedorCards({ }) {
    const [pokemones, setPokemones] = useState([]);
    const [pokemonesAux, setPokemonesAux] = useState([]);
    
    useEffect(() => {

        const llamarApi = async () => {
            const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40');
            const listaPokemones = respuesta.data.results;

            const detallePromesas = listaPokemones.map(elemento => axios.get(elemento.url));

            const rptaDetallePromesas = await Promise.all(detallePromesas);
            const detalle = rptaDetallePromesas.map(elemento => elemento.data);

            setPokemones(detalle);
            setPokemonesAux(detalle);
        }
        llamarApi();
    }, [])

    const buscarPokemon = (e) => {
        e.preventDefault();
        setPokemonesAux(pokemones.filter(pokemon => pokemon.name.toUpperCase().includes(e.target.value.toUpperCase())));
    }

    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {
                pokemonesAux.map((e, i) => (
                    <Card
                        key={i}
                        imagen={e.sprites.other.dream_world.front_default}
                        titulo={e.name}
                        abilities={e.abilities}
                    />
                ))
            }
        </div>
    )
}

export default ContenedorCards;
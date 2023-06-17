import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import Card from '../Card/Card'

function ContenedorCards({ }) {
    const [pokemones, setPokemones] = useState([]);
    const [pokemonesAux, setPokemonesAux] = useState([]);

    useEffect(() => {

        const llamarApi = async () => {
            const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=25');
            const listaPokemones = respuesta.data.results;

            const detallePromesas = listaPokemones.map(elemento => axios.get(elemento.url));

            const rptaDetallePromesas = await Promise.all(detallePromesas);
            const detalle = rptaDetallePromesas.map(elemento => elemento.data);
            console.log(detalle);

            const newDetalle = detalle.map(elemento => {
                return {
                    Nombre: elemento.name,
                    Imagen: elemento.sprites.other.dream_world.front_default,
                    Habilidades: elemento.abilities.map(e => e.ability.name),
                    Tipo: 'pokeapi'
                }
            })

            const pokemonesDB = await axios.get('http://localhost:3000/pokemon');

            setPokemones(pokemonesDB.data.map(e => ({ ...e, Tipo: 'api' })).concat(newDetalle));
            setPokemonesAux(pokemonesDB.data.map(e => ({ ...e, Tipo: 'api' })).concat(newDetalle));
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
                        imagen={e.Imagen}
                        titulo={e.Nombre}
                        abilities={e.Habilidades}
                        Tipo={e.Tipo}
                    />
                ))
            }
        </div>
    )
}

export default ContenedorCards;
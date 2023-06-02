import { useParams } from 'react-router-dom';
import './style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function DetallePokemon({ }) {

    const params = useParams();
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        const llamarApi = async () => {
            const endpoint = `https://pokeapi.co/api/v2/pokemon/${params.nombre}`;
            const response = await axios.get(endpoint);
            setPokemon(response.data);
            console.log(response.data);
        }
        llamarApi();
    }, [])

    return (
        <div className='row' style={{ minHeight: '50vh' }}>
            <div className='col-6 d-flex flex-column'>
                <div className='d-flex justify-content-center'>
                    <h3>{pokemon?.name.toUpperCase()}</h3>
                </div>
                <h5>Hablidades:</h5>
                <ul>
                    {
                        pokemon?.abilities.map((e, i) => (
                            <li key={i}>{e.ability.name}</li>
                        ))
                    }
                </ul>
                <h5>Estadisticas:</h5>
                <ul>
                    {
                        pokemon?.stats.map((e, i) => (
                            <li key={i}>{`${e.stat.name} (${e.base_stat})`}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='col-6'>
                <img src={pokemon?.sprites.other.dream_world.front_default}/>
            </div>
        </div>
    )

}

export default DetallePokemon;
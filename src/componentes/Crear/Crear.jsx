import { useState } from 'react';
import './style.css';

function Crear({ }) {

    const [habilidades, setHabilidades] = useState([]);
    const [habilidad, setHabilidad] = useState('');

    const agregarHabilidad = () => {
        if (habilidades.some(e => e === habilidad)) return
        setHabilidades([...habilidades, habilidad]);
        setHabilidad('');
    }

    const eliminarHabilidad = (elemento) => { 
        setHabilidades([...[], ...habilidades.filter(e => e !== elemento)]);
    }

    return (
        <div className='row'>
            <div className='col-7 d-flex justify-content-center'>
                <img src='https://i.pinimg.com/originals/34/e1/91/34e1910bb25227668afbb13d4dbb7dab.png' />
            </div>
            <div className='col-5 p-5 d-flex flex-column align-items-center justify-content-center'>
                <h3 className='mb-5'>Crear Pokemon</h3>
                <input
                    className='form-control mb-4'
                    type='text'
                    placeholder='Nombre'
                    aria-label='default input example'
                ></input>
                <input
                    className='form-control mb-4'
                    type='text'
                    placeholder='Url de imagen'
                    aria-label='default input example'
                ></input>
                <div className='row w-100 mb-4' style={{ margin: '0px !important' }}>
                    <div className='col-9 ps-0'>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Habilidad'
                            aria-label='default input habilidad'
                            onChange={(e) => setHabilidad(e.target.value)}
                        ></input>
                    </div>
                    <div className='col-3 pe-0'>
                        <button onClick={agregarHabilidad} type="button" className="btn btn-success w-100">Agregar</button>
                    </div>
                </div>
                <div className='w-100 mb-4'>
                    {
                        habilidades.map((e, i) => (
                            <ul key={i} className="list-group w-100 ">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        <span className="badge bg-primary rounded-pill m-2">{i + 1}</span>
                                        {e}
                                    </div>
                                    <i
                                        onClick={() => eliminarHabilidad(e)}
                                        class="bi bi-x-circle-fill"
                                        style={{
                                            color: 'red',
                                            cursor: 'pointer',
                                            fontSize: '1.5rem',
                                        }}
                                    ></i>
                                </li>
                            </ul>
                        ))
                    }
                </div>
                <button type="button" className="btn btn-primary w-100">Guardar</button>
            </div>
        </div>
    )
}

export default Crear;
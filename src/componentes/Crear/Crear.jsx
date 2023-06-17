import { useState } from 'react';
import './style.css';
import axios from 'axios';
import Toasts from '../Toasts/Toasts';

function Crear({ }) {

    const [habilidades, setHabilidades] = useState([]);
    const [habilidad, setHabilidad] = useState('');
    const [nombre, setNombre] = useState('');
    const [imagen, setImagen] = useState('');
    const [showToast, setShowToast] = useState({ Titulo: '', Mensaje: '' });

    const agregarHabilidad = () => {
        if (habilidades.some(e => e === habilidad)) return
        setHabilidades([...habilidades, habilidad]);
        setHabilidad('');
    }

    const eliminarHabilidad = (elemento) => {
        setHabilidades([...[], ...habilidades.filter(e => e !== elemento)]);
    }

    const OnClick = async () => {
        try {
            if (nombre === '' || imagen === '' || !habilidades.length) throw Error(`⚠ Alguno de los campos está incompleto.`);
            const pokemon = {
                Nombre: nombre,
                Imagen: imagen,
                Habilidades: habilidades,
            }
            const response = await axios.post('http://localhost:3000/pokemon', pokemon);
            if (response.status === 201) {
                setShowToast({ Estado: true, Mensaje: 'Se grabó correctamente' });
            }
            setImagen('');
            setNombre('');
            setHabilidades([]);
        } catch (error) {
            setShowToast({ Estado: false, Mensaje: error.message });
        }
    }

    return (
        <div className='row' style={{ position: 'relative' }}>
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
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                ></input>
                <input
                    className='form-control mb-4'
                    type='text'
                    placeholder='Url de imagen'
                    aria-label='default input example'
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                ></input>
                <div className='row w-100 mb-4' style={{ margin: '0px !important' }}>
                    <div className='col-9 ps-0'>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Habilidad'
                            aria-label='default input habilidad'
                            value={habilidad}
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
                                        className="bi bi-x-circle-fill"
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
                <button type="button" onClick={OnClick} className="btn btn-primary w-100">Guardar</button>
            </div>
            <Toasts ShowToast={showToast} />
        </div>
    )
}

export default Crear;
import './style.css';

function Crear({ }) {
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
                        ></input>
                    </div>
                    <div className='col-3 pe-0'>
                        <button type="button" className="btn btn-success w-100">Agregar</button>
                    </div>
                </div>
                <ul className="list-group w-100 mb-4">
                    <li className="list-group-item d-flex justify-content-start align-items-center">
                        <span className="badge bg-primary rounded-pill m-2">1</span>
                        A third list item
                    </li>
                </ul>
                <button type="button" class="btn btn-primary w-100">Guardar</button>
            </div>
        </div>
    )
}

export default Crear;
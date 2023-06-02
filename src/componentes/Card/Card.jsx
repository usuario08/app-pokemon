import { Link } from 'react-router-dom'
import './style.css'

function Card({ imagen, titulo, abilities }) {

    return (
        <div className='card m-3 align-items-center shadow efecto' style={{ width: '12rem' }}>
            <img src={imagen} className='card-img-top p-2' style={{ width: '11rem', height: '11rem' }} alt='...' />
            <div className='card-body d-flex flex-column justify-content-between w-100'>
                <div>
                    <h5 className='card-title'>{titulo.toUpperCase()}</h5>
                    <ol className='card-text'>
                        {
                            abilities.map((e, index) => (
                                <li key={index}>{e.ability.name}</li>
                            ))
                        }
                    </ol>
                </div>
                <Link className='btn btn-primary' to={`/${titulo}`}>
                    Detalle
                </Link>
            </div>
        </div>
    )
}

export default Card
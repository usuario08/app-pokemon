import './style.css';
import Logo from '../../assets/pokemon-23.svg';
import { Link } from 'react-router-dom';

function NavBar({ onSearch, setTextSearch }) {

    return (
        <nav className='navbar navbar-expand-lg bg-primary'>
            <div className='container-fluid'>
                <Link to={`/`} className='navbar-brand'>
                    <img src={Logo} alt="Logo" height="40" className="d-inline-block align-text-top logotipo" />
                </Link>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link className='nav-link text-white' to={`/crear`}>Crear</Link>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-white disabled'>Disabled</a>
                        </li>
                    </ul>
                    <form className='d-flex' role='search'>
                        <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                        <button className='btn btn-outline-light' type='submit'>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
import './style.css';

function Footer({ }) {
    return (
        <footer className='footer'>
            <div className='waves'>
                <div className='wave' id='wave1'></div>
                <div className='wave' id='wave2'></div>
                <div className='wave' id='wave3'></div>
                <div className='wave' id='wave4'></div>
            </div>
            <ul className='social-icon'>
                <li className='social-icon__item'><a className='social-icon__link' href='#'>
                    <i className="bi bi-facebook iconHover"></i>
                </a></li>
                <li className='social-icon__item'><a className='social-icon__link' href='#'>
                    <i className="bi bi-twitter iconHover"></i>
                </a></li>
                <li className='social-icon__item'><a className='social-icon__link' href='#'>
                    <i className="bi bi-linkedin iconHover"></i>
                </a></li>
                <li className='social-icon__item'><a className='social-icon__link' href='#'>
                    <i className="bi bi-instagram iconHover"></i>
                </a></li>
            </ul>
            <ul className='menu'>
                <li className='menu__item'><a className='menu__link' href='#'>Home</a></li>
                <li className='menu__item'><a className='menu__link' href='#'>About</a></li>
                <li className='menu__item'><a className='menu__link' href='#'>Services</a></li>
                <li className='menu__item'><a className='menu__link' href='#'>Team</a></li>
                <li className='menu__item'><a className='menu__link' href='#'>Contact</a></li>
            </ul>
            <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
        </footer>
    )
}

export default Footer;
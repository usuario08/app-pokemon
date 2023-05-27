import './App.css';
import { Outlet } from "react-router-dom";
import NavBar from './componentes/NavBar/NavbBar';
import Footer from './componentes/Footer/Footer';
import { useState } from 'react';


function App() {

    const [textSearch, setTextSearch] = useState('');

    return (
        <div className='container'>
            <NavBar
                setTextSearch={setTextSearch}
                // onSearch={buscarPokemon}
            />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App

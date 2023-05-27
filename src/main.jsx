import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ContenedorCards from './componentes/ContenedorCards/ContenedorCards.jsx';
import Crear from './componentes/Crear/Crear.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <ContenedorCards />,
                },
                {
                    path: '/crear',
                    element: <Crear />
                }
            ],
        }
    ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
    //   <React.StrictMode>
    <RouterProvider router={router} />
    //   </React.StrictMode>,
)

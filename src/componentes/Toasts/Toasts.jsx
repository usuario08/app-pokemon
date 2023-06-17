import { useEffect, useRef } from 'react';
import './Toasts.css'
import * as bootstrap from 'bootstrap';

function Toasts({ ShowToast }) {

    const toastRef = useRef();

    useEffect(() => {
        if (ShowToast.Mensaje) {
            const myToast = toastRef.current;
            const bsToast = new bootstrap.Toast(myToast);
            bsToast.show();
        }
    }, [ShowToast])

    return (
        <div ref={toastRef} className="toast miToast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <i style={{ color: `${ShowToast.Estado ? 'green' : 'red'}` }} className={`${ShowToast.Estado ? 'bi bi-check-circle-fill' : 'bi bi-x-circle-fill'} me-2`}></i>
                <strong className="me-auto">{`${ShowToast.Estado ? '¡Éxito!' : '¡Error!'}`}</strong>
                <small>0 mins ago</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
                {ShowToast.Mensaje}
            </div>
        </div>
    )
}

export default Toasts;
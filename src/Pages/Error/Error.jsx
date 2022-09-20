import React from 'react';
import './Error.css';

export default function Error() {
  return (
    <div className=" error d-flex justify-content-center" >
        <div className="d-flex flex-column justify-content-center">
            <h1 className="text-center">404 ERROR</h1>
            <h2>La pagina que estas buscando no se encuentra disponible</h2>
        </div>
    </div>
  )
}

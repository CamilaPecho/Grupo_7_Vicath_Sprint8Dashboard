import React, {useState, useEffect, useRef} from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';

function LastMovieInDb(){
    let [ultimoProducto, setUltimoProducto] = useState({})
    let [verDetalleState, setVerDetalle] = useState(false)

    useEffect(()=>{
		fetch(`/api/lastproduct`)
		.then(response => {
			return response.json()
		})
		.then(data => {
            console.log("------------------------------")
            console.log(data.lastProduct)
			setUltimoProducto(data.lastProduct)
		})
	}, [verDetalleState])

    const verDetalle = (e) =>{
        e.preventDefault()
        setVerDetalle(!verDetalleState)
    }

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
                </div>
                {verDetalleState===false && <div className="card-body">
                    <div className="text-center">
                        { Object.keys(ultimoProducto).length > 0 && <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={'http://localhost:3001/images/'+ultimoProducto.images[0].name} alt=" Star Wars - Mandalorian "/>}
                    </div>
                    <p>Titulo: {ultimoProducto.name}</p>
                    <p>Descripción: {ultimoProducto.description}</p>
                    <p>Precio: {ultimoProducto.price}</p>
                    <a className="btn btn-danger" target="_blank" onClick={verDetalle} rel="nofollow" href="/">View movie detail</a>
                </div>}
                {verDetalleState===true && <div className="card-body">
                    <div className="text-center">
                        { Object.keys(ultimoProducto).length > 0 && <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={'http://localhost:3001/images/'+ultimoProducto.images[0].name} alt=" Star Wars - Mandalorian "/>}
                    </div>
                    <p>Titulo: {ultimoProducto.name}</p>
                    <p>Descripción: {ultimoProducto.description}</p>
                    <p>Precio: {ultimoProducto.price}</p>
                    <p>Descuento: {ultimoProducto.discount}</p>
                    <p>Stock: {ultimoProducto.stock}</p>
                    <p>Stock Máximo: {ultimoProducto.stock_min}</p>
                    <p>Stock Mínimo: {ultimoProducto.stock_max}</p>
                    <p>Descripción detallada: {ultimoProducto.extended_description}</p>
                    <a className="btn btn-danger" target="_blank" onClick={verDetalle} rel="nofollow" href="/">Ver menos</a>
                </div>
                }
            </div>
        </div>
    )
}

export default LastMovieInDb;

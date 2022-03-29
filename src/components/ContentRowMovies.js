import SmallCard from './SmallCard';
import React, { useState, useEffect, useRef } from 'react';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Movies in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total awards', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Actors quantity' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(){
    const [users, setUsers] = useState([]);
    const [countUsers, setCountUsers] = useState(0);

    useEffect(() => {
		// Petición Asincrónica al montarse el componente
		const endpoint = 'http://localhost:3001/api/users';

			fetch(endpoint)
				.then(response => response.json())
				.then(data => {
					
					//setUsers(data.Search);
                    console.log(data.dataValues)
				})
				.catch(error => console.log(error))
		
	}, [countUsers])

    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;
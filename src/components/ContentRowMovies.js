//import React from 'react';
import React, {useState, useEffect, useRef} from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */


/* <!-- Movies in DB --> */



function ContentRowMovies(){
    let [countUsers, setCountUsers] = useState(0)
    let [countProducts, setCountProducts] = useState(0)
    let [countCategories, setCountCategories] = useState(0)

    useEffect(()=>{
		fetch(`https://vicath-libreria.herokuapp.com/api/users`)
		.then(response => {
			return response.json()
		})
		.then(data => {
			setCountUsers(data.count)

            //
                fetch(`https://vicath-libreria.herokuapp.com/api/products`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setCountProducts(data.count)
                    setCountCategories(data.countTotalCategories)
                })
		})
	}, [])

    let moviesInDB = {
        title: 'Total de usuarios',
        color: 'primary', 
        cuantity: countUsers,
        icon: 'fa-clipboard-list'
    }
    
    /* <!-- Total awards --> */
    
    let totalAwards = {
        title:'Total de productos', 
        color:'success', 
        cuantity: countProducts,
        icon:'fa-award'
    }
    
    /* <!-- Actors quantity --> */
    
    let actorsQuantity = {
        title:'Total de categorias' ,
        color:'warning',
        cuantity: countCategories,
        icon:'fa-user-check'
    }
    
    let cartProps = [moviesInDB, totalAwards, actorsQuantity];

    return (
    
        <div className="row">
            
            {cartProps.map( (data, i) => {

                return <SmallCard {...data} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;
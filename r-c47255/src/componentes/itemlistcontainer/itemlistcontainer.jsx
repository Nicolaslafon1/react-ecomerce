
import React from 'react';

import { useEffect, useState } from "react"
import { mFetch } from '../Helpers/Mfetch';
import  {Itemlist } from '../Itemlist/Itemlist';
import { useParams } from "react-router-dom";





const Loading = () => {
  return (
    <h2>Cargando...</h2>
  )
}




function ItemListContainer({ greeting = 'saludando por defecto' }) {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ]   = useState(true)

  const { cid } = useParams();

  
useEffect(()=>{

    if (cid) {
        mFetch() //llamando a mi mfetch -> 
      .then(resultado => setProducts(resultado.filter(product => product.category === cid)))
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))
        
    } else {
        mFetch() //llamando a mi mfetch -> 
        .then(resultado => setProducts(resultado))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
        
    }
  }, [cid])

return (
    <>
        <center>
            {greeting}
        </center>
        <div className="d-flex justify-content-center aling-items-center"> 
       {   loading ? 
       
       <Loading/>
            :
            
            <Itemlist products={products}></Itemlist>
        }
        </div>
    </>
)
}
export default ItemListContainer;






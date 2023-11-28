import React from 'react';
import { useEffect, useState } from "react"
import  {Itemlist } from '../Itemlist/Itemlist';
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, getFirestore, limit, orderBy, query,where } from "firebase/firestore"

const Loading = () => {
return (
    <h2>Cargando...</h2>
)
}
function ItemListContainer({ greeting = 'saludando por defecto' }) {
  
  
    const [ products, setProducts ] = useState([])
    const [ product, setProduct ] = useState({})
    const [ loading, setLoading ]   = useState(true)
    const { cid } = useParams()

    useEffect(()=>{
    const dbFirestore     = getFirestore()
    const queryCollection = collection(dbFirestore, 'products') 
    
    if (cid) {
        
    const queryFilter     = query(queryCollection, where('category', '==', cid))
            
        
    getDocs(queryFilter)
    .then(res =>{ setProducts( res.docs.map(product => ({ id: product.id , ...product.data() }) ) )})
    .catch(err => console.log(err)) 
    .finally(() => setLoading(false))
        
    }else{ 
        getDocs(queryCollection)
        .then(res => setProducts( res.docs.map(product => ({ id: product.id , ...product.data() }) ) ))
        .catch(err => console.log(err)) 
        .finally(() => setLoading(false))
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


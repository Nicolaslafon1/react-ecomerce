import { useState } from "react";
import { Link } from "react-router-dom";


const InputCount= ()=> {

    return (
        <>
            <Link to='/cart' >
                <button 
                    className="btn btn-outline-primary" 
                    onClick={()=>console.log('ir a cart') } 
                >Ir al Cart o Terminar compra</button>
            </Link>
            <Link to='/' >
                <button 
                    className="btn btn-outline-primary" 
                    onClick={()=>console.log('ir al home') } 
                >Seguir comprando</button>
            </Link>
        </>
    )
}
const ButtonCount= ({handleInter})=> {
    return <>
            <div>
                <button className="btn btn-primary">+</button>
                <label>1</label>
                <button className="btn btn-primary">-</button>
            </div>
            <button 
                className="btn btn-outline-success" 
                onClick={handleInter}
            >
                Agregar Al carrito
            </button>
    </>
    

}
const Intercambiabilidad = () => { 

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{ 
        setInputType('input')
    }
    
    return (
        <>
            
            {
                inputType === 'button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
        
        </>
    )
}

export default Intercambiabilidad
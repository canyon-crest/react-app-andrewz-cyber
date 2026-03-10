import './Card.css'
import {useState} from 'react'

function Card({Name,description,onAddToCart}){

    const [count,setCount] = useState(0)

    const inc = () =>{
        setCount(count+1)
        onAddToCart();
    }

    return (
        <div className='Card'>
            <h2>{Name}</h2>
            <p>Description: {description}</p>
            <button onClick = {inc}>Add {Name} to cart</button>
            <button onClick = {()=> setCount(0)}>Reset</button>
            <p>{Name} in cart: {count}</p>
        </div>
    )
}

export default Card
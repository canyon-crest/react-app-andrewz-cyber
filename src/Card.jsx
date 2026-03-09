import './Card.css'
import {useState} from 'react'

function Card({Name,description}){

    const [count,setCount] = useState(0)
    const [cart, setCart] = useState("is empty")

    const inc = () =>{
        setCount(count+1)
        if ({count}!=0)
            setCart("has " + {count} + " items.");
        else   
            setCart("is empty");
    }

    return (
        <div className='Card'>
            <h2>{Name}</h2>
            <p>Description: {description}</p>
            <button onClick = {()=> setCount(count + 1)}>Add {Name} to Tardy List</button>
            <button onClick = {()=> setCount(0)}>Reset</button>
            <p onChange={inc}>{Name}'s Tardies: {count}</p>
            <p>Your cart {cart}</p>
        </div>
    )
}

export default Card
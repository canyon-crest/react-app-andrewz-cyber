import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card';
import './App.css';

function App() {
  const [cartTotal, setCartTotal] = useState(0)

  const incCartTotal = () => {
    setCartTotal(prevTotal => prevTotal + 1);
  }

  return(
    <>
       {/* <div>
         <a href="https://vite.dev" target="_blank">
           <img src={viteLogo} className="logo" alt="Vite logo" />
         </a>
         <a href="https://react.dev" target="_blank">
           <img src={reactLogo} className="logo react" alt="React logo" />
         </a>
       </div>
       <h1>Vite + React</h1>
       <div className="card">
         <button onClick={() => setCount((count) => count + 6767676767)}>
           count is {count}
         </button>
         <p>
           Edit <code>src/App.jsx</code> and save to test HMR
         </p>
       </div>
       <p className="read-the-docs">
         Click on the Vite and React logos to learn more
       </p> */}
        <br></br>
        <h1>Apples</h1>
        <p>Apples are very tasty and healthy. Please buy and eat a lot of apples.</p>
        <div className="ShoppingCart">
          <h1>Shopping Cart Total: {cartTotal}</h1>
          <Card Name="Honeycrisp Apples" description="Exceptionally crisp and juicy, perfect for fresh eating and salads." onAddToCart = {incCartTotal} />
          <Card Name="Fuji Apples" description="Very sweet and firm, excellent for snacking, baking, and sauces." onAddToCart = {incCartTotal} />
          <Card Name="Granny Smith Apples" description="Bright green and tart, ideal for pies, baking, and snacking." onAddToCart = {incCartTotal} />
        </div>
    </>
  )
}

export default App

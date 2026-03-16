import { useState } from 'react'
import Card from './Card';
import './App.css';

function App() {
  const [cartTotal, setCartTotal] = useState(0)
  const [page, setPage] = useState("home");

  const incCartTotal = () => {
    setCartTotal(prevTotal => prevTotal + 1);
  }

  return(
    <>
        <Nav setPage = {setPage} />
        {page == "home" && <App/>}
        {page == "about" && <About/>}
        {page == "contact" && <Contact/>}
        <br></br>
        <h1>Apples</h1>
        <p>Apples are very tasty and healthy. Please buy and eat a lot of apples.</p>
        <h1>Shopping Cart Total: {cartTotal}</h1>
        <div className="ShoppingCart">
        <Card Name="Honeycrisp Apples" description="Exceptionally crisp and juicy, perfect for fresh eating and salads."  onAddToCart = {incCartTotal} />
        <Card Name="Fuji Apples" description="Very sweet and firm, excellent for snacking, baking, and sauces."  onAddToCart = {incCartTotal} />
        <Card Name="Granny Smith Apples" description="Bright green and tart, ideal for pies, baking, and snacking." onAddToCart = {incCartTotal} />
        <Card Name="Gala Apples" description="A sweet, crisp, and aromatic apple, perfect for eating raw and in salads." onAddToCart = {incCartTotal} />
        <Card Name="Red Delicious Apples" description="A classic, mild-sweet, and crisp red apple." onAddToCart = {incCartTotal} />
        <Card Name="Cosmic Crisp Apples" description="A firm, sweet, and crisp variety, designed to be a long-lasting, versatile apple." onAddToCart = {incCartTotal} />
        </div>
    </>
  )
}

export default App

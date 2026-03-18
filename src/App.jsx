import Card from './Card';
import Nav from './Nav.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import { useState, useEffect } from "react";
import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp, getDocs } from "firebase/firestore";
import './App.css';
import GoogleLogin from './GoogleLogin.jsx';

function App() {
  const [cartTotal, setCartTotal] = useState(0)
  const [page, setPage] = useState("home");

  const incCartTotal = () => {
    setCartTotal(prevTotal => prevTotal + 1);
  }

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]); 

  const loadItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const loaded = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setItems(loaded);
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleAdd = async () => {
    if (inputText.trim() === "") return;

    await addDoc(collection(db, "items"), {
      text: inputText,
      createdAt: serverTimestamp()
    });

    setInputText("");  
    loadItems();     
  };

  return(
    <>
        <GoogleLogin/>
        <Nav setPage = {setPage} />
        {page == "about" && <About/>}
        {page == "contact" && <Contact/>}
        {page == "home" && (
        <>
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
        )}
        <div>
      <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
    </div>
      <h1>We want your opinions!</h1>
      <h3>Give us feedback on what types of apples you want added to our shop!</h3>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter something..."
          style={{ padding: "0.5rem", width: "300px", marginRight: "0.5rem" }}
        />
        <button onClick={handleAdd}>Add Item</button>
      </div>

      <h2>Opinions recorded:</h2>
      {items.length === 0 ? (
        <p>No opinions yet.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      )}
    </div>
    </>
  )
}

export default App

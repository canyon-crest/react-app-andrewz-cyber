import { useState, useEffect } from "react";
import { db} from './firebase.js';
import { collection, addDoc, serverTimestamp, getDocs } from "firebase/firestore";
import DogAPI from "./DogAPI.jsx";

function About() {
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

  return (
    <><div>
      <h1>About Apples</h1>
      <p>Apples are a popular fruit known for their crisp texture and sweet flavor. They are a great source of fiber, vitamin C, and antioxidants.</p>
      <p>There are many different varieties of apples, each with its own unique taste and texture. Some popular varieties include: Honeycrisp, Fuji, Granny Smith, Gala, and Red Delicious.</p>
      <p>We provide all of these kinds of apples mentioned in our home page!</p>
      <hr></hr>
      <h3>Here are some cute Dog photos to enjoy watching!</h3>
      <DogAPI/>
    </div><div>
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
            style={{ padding: "0.5rem", width: "300px", marginRight: "0.5rem" }} />
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
  );
}

export default About;
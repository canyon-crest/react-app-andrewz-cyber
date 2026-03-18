import React, { useState } from 'react';

function DogAPI() {
    const [apiData, setApiData] = useState('');

    const fetchDogImage = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            setApiData(data.message); // Set the URL from API
        } catch (error) {
            console.error('Error fetching dog image:', error);
        }
    };

    return (
        // Added Fragment (<> ... </>) to wrap elements
        <> 
            <button onClick={fetchDogImage}>Generate Dog Image</button>
            <br />
            {apiData && <img src={apiData} alt="Random Dog" style={{maxWidth: '300px'}} />}
        </>
    );
}

export default DogAPI;

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
// import axios from 'axios';
// import App from '../App'

const Home = () => {
    const [pizza, setPizza] = useState([]);
    const { push } = useHistory();


    const routeToBuild = () => {
        push('/pizza') 
    }

    return (
      <>
        <h1>Lambda Eats</h1>
        <p>Build your own pizza!</p>
        <button id='order-pizza' onClick={routeToBuild}>Build Pizza</button>
      </>
    );
  };

  export default Home;
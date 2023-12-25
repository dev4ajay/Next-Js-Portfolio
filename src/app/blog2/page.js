// pages/blog1.js
"use client"
import React, { useEffect, useState   } from 'react';
import Nav from '../Nav/nav';
import axios from "axios"
import Footer from '../Footer/page';

const Blog1 = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  

  return (
    <div className='container mx-auto'>
      <Nav/>
      
      {data.length ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <Footer/>
    </div>
  );
};

export default Blog1;

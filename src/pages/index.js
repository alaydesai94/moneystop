import React from 'react';
import SearchName from '../components/Navbar/SearchName.js';

const Home = () => {
  return (
    <div>

      <SearchName />

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40vh'
      }}>
      <h1 >Home</h1>
      </div>



    </div>
  );
};

export default Home;

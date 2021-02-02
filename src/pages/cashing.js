import React, {Component} from 'react';
import SearchName from '../components/Navbar/SearchName.js';
import InfoResult from '../components/Navbar/SearchResult.js';

class Cashing extends Component {
  render() {
    return (

      <div>

          <div>
            <SearchName />
          </div>


        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40vh'
        }}>
        <h1 >Cashing</h1>
        </div>

      </div>
    );
  }
}

export default Cashing;

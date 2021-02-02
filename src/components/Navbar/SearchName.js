import React, {Component} from 'react';
import './Search.css'
import './info.js'

const SearchName = () => {

    return (
      <div class="container">
  <form action="/" method="get">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="fname" placeholder="Your name.." />

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lname" placeholder="Your last name.." />

    <input type="submit" value="Submit"/>
  </form>
</div>
    );
}


export default SearchName;

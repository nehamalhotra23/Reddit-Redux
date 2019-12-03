
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  var navBarButton = {

    display: 'inline-block',
    backgroundColor: 'blanchedalmond',
    border: 'solid 2px burlywood',
  };
  var navBar = {
    borderRadius: '20px',
    display: 'block',
    margin: '0% auto 0% auto',
    padding: '0',
    overflow: 'hidden',
    backgroundColor: 'burlywood',
    width: '70%',
    textAlign: 'center',
  };
  var navLink = {
    color: 'black',
  };
  return (
    
    <nav >
      
      <div className = "container" style={navBar}>
        <button className="btn" style={navBarButton}><Link style={navLink} to = "/">Home</Link></button>
        <button className="btn" style={navBarButton}><Link style={navLink} to="/newstory">Add new post</Link></button>
      </div>
    </nav>
  );
}
export default NavBar;
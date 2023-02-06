import React from 'react';
import './Layout.css';
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="site-header">
        <div className="site-title">Kevin Deng's Portfolio</div>

        <div className="site-description">Built by Kevin with HTML, CSS, React, and love.</div>

        <div className="site-navigation">
        <Link to="/"><button>Home</button></Link>
        <Link to="/programming"><button>Programming projects</button></Link>
        <Link to="/community"><button>Community involvement</button></Link>
        <Link to="/about"><button>About Kevin</button></Link>
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default Navbar;
import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
        <ul>
            <Link to='/'>Todo</Link>
            <Link to="/devcha">Devcha</Link>
            <Link to="/memory">Memory Game</Link>
        </ul>
    </div>
  )
}

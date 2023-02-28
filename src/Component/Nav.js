import React from 'react'
import { NavLink } from 'react-router-dom'
import navcss from '../Component/Nav.module.css'
const Nav = () => {
    return (
        <div className={navcss.nav}>
            <h1><img width={90} src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg" alt="" /></h1>
            <ul>
                <li>
                    <NavLink style={{textDecoration:"none", color:"white"}} to="/">Movie
                    </NavLink>
                </li>
                <li>
                    <NavLink style={{textDecoration:"none",color:"white"}} to="/tvshow">Tvshow
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav
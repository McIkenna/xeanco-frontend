import React, {useState} from 'react'
import {Link} from "react-router-dom"
import EditorBar from './EditorBar'
import style from "./Header.module.css"
import logo from "../../images/xeanco.png"

function NavBar() {

        const [colorChange, setColorchange] = useState(false);
        const changeNavbarColor = () =>{
           if(window.scrollY >= 80){
             setColorchange(true);
           }
           else{
             setColorchange(false);
           }
        };
        window.addEventListener('scroll', changeNavbarColor);

    
    return (
    <nav className='navbar navbar-expand-lg navbar-dark' id = {colorChange ? style.navbar_active : style.navbar}>
    <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="logo" alt="..."/></Link>
    <div>
      <ul className={style.nav_elements}>
        <li className={style.nav_item}>
          <Link className={style.nav_link} aria-current="page" to="/">Home</Link>
        </li>
        <li className={style.nav_item}>
          <Link className={style.nav_link} aria-current="page" to="#">Service</Link>
        </li>
        <li className={style.nav_item}>
          <Link className={style.nav_link} aria-current="page" to="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
<EditorBar/>
</nav>
    )
}

export default NavBar

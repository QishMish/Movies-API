import React, {useState,useEffect} from 'react'
import logo from "../Images/MovieLogo.svg";
import moon from "../Images/moon.png";
import sun from "../Images/sun.png";
import {Link} from "react-router-dom";
import { useGlobalContext  } from "../Context";


export default function Header() {

   const getTheme=()=>{
    let theme = 'dark-theme'
        if(localStorage.getItem('theme')){
            
            theme = localStorage.getItem('theme')
        }
        return theme
    }

    const [theme,setTheme] = useState(getTheme);

    const colorModeToggle = ()=>{
        if(theme==='dark-theme'){
            setTheme('light-theme')
        }else{
            setTheme('dark-theme')
        }
    }

   useEffect(()=>{
        document.documentElement.className = theme
        localStorage.setItem('theme', theme)
   }, [theme])


   const {query, setQuery} = useGlobalContext();


    return (
        <div className='header'>
            <div className='header-left'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={logo} alt='logo'></img>
                    </Link>
                </div>
                <div className='nav'>
                    
                    <li>
                        <Link to='/'>Movies</Link>
                    </li>
                    <li>
                        <Link to='/favourites'>Favourites</Link>
                    </li>
                </div>
            </div>
            <div className='header-right'>
                <div className='searchbar'>
                    <input type="text" placeholder="Search..." value={query} onChange={(e)=>setQuery(e.target.value)}/>
                    <i className="fas fa-search"></i>
                </div>
                <div className='toggle-button' onClick={colorModeToggle}>
                    {theme ==='dark-theme' ? <img src={sun} alt='sun'/> : <img src={moon} alt='moon'/>}
                </div>
            </div>
        </div>
    )
}

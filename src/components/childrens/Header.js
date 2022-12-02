import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';


const Header = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [showLinks, setShowLinks ] = useState(false);
    const handleShowLinks = () =>{
        setShowLinks(!showLinks)
    }
    
    
    return (
        <div>
        <header>
            <div className='filtrer'>
                <nav className={`navBar ${showLinks ? "showNav" : "hideNav"}`}>
                    <div>
                        <img className='logo' src={logo} alt="" />
                    </div>
                    <ul className='navContainer'>
                        <li className='navLink'><NavLink to={'/'}>Home</NavLink></li>
                        <li className='navLink'><NavLink to={'/Films'}>Films</NavLink></li>
                        <li className='navLink'><NavLink to={'/Series'}>Series</NavLink></li>
                        <li className='navLink'><NavLink to={'/Login'}>Login</NavLink></li>
                    </ul>
                    <button className='navBurger' onClick={handleShowLinks}>
                        <span className='burgerBar'></span>
                    </button>
                    <div className='inputNav'>
                        <input type="text" />
                        <button>clic</button>
                    </div>  
                </nav>
            </div>
        </header>
        </div>
    );
};

export default Header;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';
import {useAuth} from '../../context/AuthContext';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [menu,setMenu] = useState("Home");

    const handleSearch = async () => {
        try{
            const response = await axios.post('http://localhost:5500/search', { query });
            setResults(response.data);
        } catch(error) {
            console.error('Error searching:', error);
        }
    };

    const logoutFn = () => {
        logout();
        navigate('/');
    } 
    const loginFn = () => {
        setMenu("Login") ;
    }
    
    return (
        <header>
            <div className="top-bar">
                <div className="store-logo">
                   <img src={'assets/logo.png'} alt="Store Logo" /> 
                </div>
                <ul className="nav-menu"> 
                    <li onClick={()=>{setMenu("Home")}}>
                        <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
                        {menu === "Home"? <hr /> : <></>}
                    </li>

                    <li onClick={()=>{setMenu("Contact")}}>
                        <Link style={{ textDecoration: 'none' }} to='/Contactus'>Contact</Link>
                        {menu === "Contact"? <hr /> :<></>}</li>

                    <li onClick={()=>{setMenu("About")}}>
                        <Link style={{ textDecoration: 'none' }} to='/About'>About</Link>
                        {menu === "About"? <hr /> :<></>}</li>
                    
                    <li onClick={()=>{setMenu("Products")}}>
                        <Link style={{ textDecoration: 'none' }} to='/items'>Products</Link>
                        {menu === "Products"? <hr /> :<></>}</li>
                    
                   
                    

{isAuthenticated ? (
    <li>
        <Link onClick={() => logoutFn()} style={{ textDecoration: 'none' }} className="px-2">Logout</Link>
    </li>
            ) : (
                <>
              <li onClick={() => loginFn()}>
              <Link  to="/login" style={{ textDecoration: 'none' }} className="px-2">Login</Link>
              </li>
              <li onClick={() => setMenu("Signup")}>
                        <Link style={{ textDecoration: 'none' }} to='/Signup'>Signup</Link>
                        {menu === "Signup" && <hr />}
                    </li>
                    </>
            )}
                    
                </ul>
                <div className="nav-icons">
                    <Link to={`/search?q=${query}`} style={{ textDecoration: 'none' }}>
                        <i className="fas fa-search"></i>
                    </Link>
                    <Link to="/cart" style={{ textDecoration: 'none' }}>
                        <FaShoppingCart className="icon" /> 
                     </Link>
                
                </div>
            </div>
        </header>
    );
}
    
export default Header;
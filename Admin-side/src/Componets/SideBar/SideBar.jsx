import React from 'react';
import './SideBar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function SideBar() {



    function toggleNav() {
        const sidebar = document.getElementById("mySidebar");
        sidebar.classList.toggle("closed");
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle("open");
        }
    }

    return (
        <>
            <div id="mySidebar" className="sidebar bg-dark">
                <div className="sidebar-header">
                    <h3 className='text-green'>Maria Store</h3>
                    <button className="toggle-btn" onClick={toggleNav}>
                        <GiHamburgerMenu className='text-white'/>
                    </button>
                </div>

                <Link to={'/'} >
                    
                    <span className='ps-3  '>
                            Home
                    </span>
                </Link>
                <Link to={'/order'}>
                    
                    <span className='ps-3 '>Order</span>
                </Link>
                <Link to={'/inventory'}>
                    
                    <span className='ps-3 '>Inventory</span>
                </Link>
                <Link  to={'/upload'}>
                    
                    <span className='ps-3 '>Upload</span>
                </Link>
            </div>
        </>
    );
}

export default SideBar;

import React from 'react';
import styles from './navbar.module.css';
import { NavLink, Outlet } from 'react-router-dom';

function navbar() {
    return (
        <nav className='container-fluid'>
            <div className={`row ${styles.wrapper}`}>
                <div className={`${styles.navbarwrapper}`}>
                    <NavLink to={'/dashboard'} className={(status)=> (status.isActive ? `${styles.activeNavbar}` : '')}><img src={process.env.PUBLIC_URL + "/images/Dashboard.svg"} alt="" /></NavLink>
                    <NavLink to={'/projectlist'} className={(status)=> (status.isActive ? `${styles.activeNavbar}` : '')}><img src={process.env.PUBLIC_URL + "/images/Project-list.svg"} alt="" /></NavLink>
                    <hr className='mx-2'/>
                    <NavLink to={'/home'} className={(status)=> (status.isActive ? `${styles.activeNavbar}` : '')}><img src={process.env.PUBLIC_URL + "/images/create-project-active.svg"} alt="" /></NavLink>
                    <NavLink to={'/'} className={`${styles.logout}`}><img src={process.env.PUBLIC_URL + "/images/logout.svg"} alt="" /></NavLink>
                </div>
                <div className={`${styles.content}`}>
                <Outlet />
                </div>
            </div>
        </nav>
    )
}

export default navbar

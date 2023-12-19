import React from 'react';
import styles from './navbar.module.css';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('authToken');
        navigate('/');
    }

    return (
        <nav className='container-fluid'>
            <div className={`row ${styles.wrapper}`}>
                <div className={`${styles.navbarwrapper}`}>
                    <NavLink to={'/dashboard'} className={(status)=> (status.isActive ? `${styles.activeNavbar}` : '')}><img src={process.env.PUBLIC_URL + "/images/Dashboard.svg"} alt="" /></NavLink>
                    <NavLink to={'/projectlist'} className={(status)=> (status.isActive ? `${styles.activeNavbar}` : '')}><img src={process.env.PUBLIC_URL + "/images/Project-list.svg"} alt="" /></NavLink>
                    <hr className='mx-2'/>
                    <NavLink to={'/home'} className={(status)=> (status.isActive ? `${styles.activeNavbar}` : '')}><img src={process.env.PUBLIC_URL + "/images/create-project-active.svg"} alt="" /></NavLink>
                    <img onClick={logout} className={`${styles.logout}`} height={'22px'} width={'100%'} src={process.env.PUBLIC_URL + "/images/logout.svg"} alt="" />
                </div>
                <div className={`${styles.content}`}>
                <Outlet />
                </div>
            </div>
        </nav>
    )
}

export default Navbar

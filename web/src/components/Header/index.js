import React from 'react';
import { NavLink } from 'react-router-dom';
import logoIcon from '../../assets/cupom.svg';
import './styles.css'

const Header = () => {
    return (
        <nav className="navbar">
            <div className="menu_nav">
                <img src={logoIcon} />
                <NavLink
                    exact
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/stores"
                >
                    Lojas
                </NavLink>
                <NavLink
                    exact
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/users"
                >
                    Usuários
                </NavLink>
                <NavLink
                    exact
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/reports"
                >
                    Relatórios
                </NavLink>
            </div>
            <div className="menu_nav">
                <NavLink to="/" >
                    <button>Sair</button>
                </NavLink>
            </div>
        </nav >
    );
}

export default Header;
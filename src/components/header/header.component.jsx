import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import { ReactComponent as HamburgerMenu } from "../../assets/shared/icon-hamburger.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import "./header.style.css";

const Header = ({ onUserClick }) => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header>
            <Logo className="logo" />
            <div className="line" />
            <HamburgerMenu
                onClick={() => {
                    setNavOpen(!navOpen);
                }}
                className="hamburger-menu"
            />
            <nav style={{ display: navOpen ? "none" : "block" }}>
                <ul className="nav-list">
                    <li>
                        <NavLink
                            onClick={() => {
                                document.body.removeAttribute("class");
                                document.body.classList.add("home-page");
                            }}
                            className={({ isActive }) =>
                                "nav-link-text " +
                                (isActive ? " selected" : "unselected")
                            }
                            to="/"
                        >
                            <span>00</span> home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={() => {
                                document.body.removeAttribute("class");
                                document.body.classList.add("destination-page");
                            }}
                            className={({ isActive }) =>
                                "nav-link-text " +
                                (isActive ? " selected" : "unselected")
                            }
                            to="/destination"
                        >
                            <span>01</span> destination
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={() => {
                                document.body.removeAttribute("class");
                                document.body.classList.add("crew-page");
                            }}
                            className={({ isActive }) =>
                                "nav-link-text " +
                                (isActive ? " selected" : "unselected")
                            }
                            to="/crew"
                        >
                            <span>02</span> crew
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={() => {
                                document.body.removeAttribute("class");
                                document.body.classList.add("technology-page");
                            }}
                            className={({ isActive }) =>
                                "nav-link-text " +
                                (isActive ? " selected" : "unselected")
                            }
                            to="/technology"
                        >
                            <span>03</span> technology
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

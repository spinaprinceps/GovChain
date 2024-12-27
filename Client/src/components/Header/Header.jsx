import React, { useState } from 'react';
import logo from '../../logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [icon, setIcon] = useState(faBars);
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setIcon((prevIcon) => (prevIcon === faBars ? faX : faBars));
        setNavOpen((prevNavOpen) => !prevNavOpen);
    };

    return (
        <header className="bg-transparent absolute top-0 left-0 w-full z-50">
            <nav className="flex justify-between items-center w-[92%] mx-auto py-4">
                {/* Logo */}
                <div>
                    <Link to="/">
                        <img src={logo} alt="logo" className="w-[12vh]" />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div>
                    <div
                        className={`lg:static absolute lg:w-auto w-full lg:min-h-fit min-h-[60vh] left-0 transition-all duration-500 ease-in-out ${
                            navOpen ? 'top-[10%] bg-[#03045E]' : 'top-[-100%]'
                        }`}
                    >
                        <ul className="flex lg:flex-row flex-col items-center lg:gap-8 gap-6 text-lg font-semibold">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-lg ${
                                            isActive
                                                ? 'text-[#CAF0F8]'
                                                : 'hover:text-[#CAF0F8]'
                                        }`
                                    }
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-lg ${
                                            isActive
                                                ? 'text-[#CAF0F8]'
                                                : 'hover:text-[#CAF0F8]'
                                        }`
                                    }
                                >
                                    ABOUT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-lg ${
                                            isActive
                                                ? 'text-[#CAF0F8]'
                                                : 'hover:text-[#CAF0F8]'
                                        }`
                                    }
                                >
                                    CONTACT
                                </NavLink>
                            </li>
                            <li>
                                <button
                                    className="px-4 py-2 bg-[#CAF0F8] text-[#03045E] rounded-lg hover:scale-110 transition-transform duration-300"
                                >
                                    Connect Wallet
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Hamburger Icon for Mobile */}
                    <div onClick={toggleNav} className="cursor-pointer lg:hidden">
                        <FontAwesomeIcon
                            icon={icon}
                            style={{ color: '#CAF0F8' }}
                            className="h-6"
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

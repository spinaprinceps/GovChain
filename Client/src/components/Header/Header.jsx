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
                                    to="/dashboard"
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
                                    className="px-6 py-3 text-xl bg-gradient-to-r from-[#00b6c1] to-[#00a1a0] text-white rounded-md border-2 border-[#00b6c1] bg-opacity-20 hover:scale-110 hover:from-[#008e8a] hover:to-[#00b6c1] hover:border-[#008e8a] transition-transform duration-300"

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

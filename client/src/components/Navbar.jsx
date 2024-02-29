import { Link, useNavigate } from 'react-router-dom';
import logo from '../covers/logo-4.png';
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <nav className='md:flex md:justify-between pt-1 md:pb-4'>
                <div className="bgWhite p-2 pb-2 md:p-0 flex justify-between">
                    <button
                        className="focus:outline-none navbar--button md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                    <Link to="./" className="navbar--logo p-1">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <ul className={`navbar-principal pb-2 ${isMenuOpen ? 'block' : 'hidden'} sm:flex sm:items-center gap-6 p-2`}>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/about">
                        Sobre mi</Link></li>
                    <li><Link to="/services">Servicios</Link></li>
                    <li><Link to="/reiki">Reiki</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
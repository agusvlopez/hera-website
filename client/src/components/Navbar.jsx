import { Link, useNavigate } from 'react-router-dom';
import logo from '../covers/logo-4.png';
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <nav className='lg:flex lg:justify-between pt-1 lg:pb-4'>
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
                    <li> <a href="#about">
                        Sobre mi</a></li>
                    <li><Link to="/">Tarot</Link></li>
                    <li><Link to="/">Ayuda con velas</Link></li>
                    <li><a href="#reiki">Reiki</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
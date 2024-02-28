import { Link } from "react-router-dom";
import logo from "../covers/logo-sin-fondo.png";
import instagramIcon from "../covers/icons/instagram.png";
function Footer() {

    return (
        <>
            <footer>
                <div className='footer--img'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='footer--menu'>
                    <ul className='navbar-principal p-2'>
                        <li> <a href="#about">
                            Sobre mi</a></li>
                        <li><Link to="/">Tarot</Link></li>
                        <li><Link to="/">Ayuda con velas</Link></li>
                        <li><a href="#reiki">
                            Reiki</a></li>
                    </ul>
                </div>
                <div className='footer--contact'>
                    <span>Contacto</span>
                    <ul>
                        <li className='footer--contact-icon'>
                            <a href="https://www.instagram.com/hera.tarotyvelas/">
                                <img src={instagramIcon} alt="Instagram" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;
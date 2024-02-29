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
                        <li><Link to="/">Home</Link></li>
                        <li> <Link to="/about">Sobre mi</Link></li>
                        <li><Link to="/services">Servicios</Link></li>
                        <li><Link to="/reiki">Reiki</Link></li>
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
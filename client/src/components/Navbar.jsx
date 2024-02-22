import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

    return (
        <>
            <nav>
                <ul className='flex justify-around p-6 pb-0'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Sobre mi</Link></li>
                    <li><Link to="/">Tarot</Link></li>
                    <li><Link to="/">Reiki</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import  { Link } from 'react-router-dom';
// import About from './About';

export default function Navbar() {
        return (
        <nav>
            <div className="nav-inside">
                <div className="logo">
                    <Link to='/'><img src="./images/logo.png" alt=""/></Link>
                </div>
                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                    <li><Link to=''>ARTICLES</Link></li>
                    <li><Link to=''><FaTwitter/></Link></li>
                    <li><Link to=''><FaInstagram/></Link></li>
                    <li><Link to=''><button>FEEDBACK</button></Link></li>
                </ul>
            </div>
        </nav>            
    )
}

import { FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Navbar() {
        return (
        <nav>
            <div className="nav-inside">
                <div className="logo">
                    <a href='/'><img src="./images/logo.png" alt=""/></a>
                </div>
                <ul>
                    <li><a href='/'>HOME</a></li>
                    <li><a href='/about'>ABOUT</a></li>
                    <li><a href=''>ARTICLES</a></li>
                    <li><a href=''><FaTwitter/></a></li>
                    <li><a href=''><FaInstagram/></a></li>
                    <li><a href=''><buthrefn>FEEDBACK</buthrefn></a></li>
                </ul>
            </div>
        </nav>            
    )
}

import { FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <div className="footer-inside">
                <div className="good">
                    <img src="./images/logo.png" alt=""/>
                    <p>Sign up to learn about sustainability and how 
                        you can make your clothes last longer.</p>
                    <div className="new-letter">
                        <input type="email" placeholder='Your Email'/>
                        <button>SIGN UP</button>
                    </div>
                    <span>No spam, unsubscribe at any time</span>
                </div>
                <div className="options">
                    <div className="garms">
                        <a href="">All items</a>
                        <a href="">T-shirts</a>
                        <a href="">Jumpers</a>
                        <a href="">Mens</a>
                        <a href="">Womens</a>
                        <a href="">Unisex</a>
                        <a href="">Organic</a>
                        <a href="">Recycled</a>
                    </div>
                    <div className="useful">
                        <a href="">About us</a>
                        <a href="">Articles</a>
                        <a href="">Contact</a>
                        <a href="">FAQs</a>
                        <a href="">Newsletter</a>
                        <a href="">Privacy policy</a>
                    </div>
                    <div className="social">
                        <FaTwitter/>
                        <FaInstagram/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

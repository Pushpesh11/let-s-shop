import { FaQuoteLeft } from 'react-icons/fa';
// import Footer from './Footer';

export default function About() {
    return (
        <div className="about">
            <div className="header">
                <div className="info">
                    <h1>Slowing down fashion</h1>
                    <p>Find great quality clothes that don’t sacrifice 
                        the environment or the people that made them.</p>
                </div>
                <img src="./images/garbage.jpg" alt=""/>
            </div>

            <div className="more-info">
                <h1>Tell me more</h1>
                <p>Good Garms is a place to discover
                     clothes made with love and learn about sustainability. 
                    We put sustainable brands front and centre.</p>
            </div>

            <div className="numbers">
                <div className="num-review">
                    <img src="./images/up.png" alt=""/>
                    <h1>Discover ethical clothes</h1>
                    <p>We highlight ethical and sustainable
                    brands that go the extra mile. Brands that care about quality.</p>
                </div>
                <div className="num-review">
                    <img src="./images/peace.png" alt=""/>
                    <h1>Read honest reviews</h1>
                    <p>Transparency is vital. People trust people, not brands. No sponsored products or ads.</p>
                </div>
                <div className="num-review">
                    <img src="./images/three.png" alt=""/>
                    <h1>Make good purchases</h1>
                    <p>Make more informed sustainable purchases. Better for you, better for the planet.</p>
                </div>
            </div>

            <div className="quote">
                <FaQuoteLeft/>
                <h1>Clothing production contributes more to climate 
                    change than the world’s flying and shipping combined.</h1>
            </div>

            <div className="our-beliefs">
                <h1>Our beliefs</h1>
                <div className="beliefs">
                    <div className="beliefs-inside">
                        <h2>Transprency is vital</h2>
                        <p>Being open and honest is a critical 
                        first step towards positive, sustainable change.</p>
                    </div>
                    <img src="./images/up.png" alt=""/>
                </div>
                <div className="beliefs">
                    <div className="beliefs-inside">
                        <h2>Small changes have big impacts</h2>
                        <p>Be aware, demand better, and improve daily habits. The snowball effect can have unimaginable results.</p>
                    </div>
                    <img src="./images/peace.png" alt=""/>
                </div>
                <div className="beliefs">
                    <div className="beliefs-inside">
                        <h2>People trust people, not brands</h2>
                        <p>To be honest — we've lost trust in big brands. We want to have genuine conversations not be brainwashed by marketing.</p>
                    </div>
                    <img src="./images/three.png" alt=""/>
                </div>
            </div>

            <div className="our-story">
                <h1>Our story</h1>
                <p>The story of Good Garms goes back a few years. 
                    There were two sides to it. Firstly, we were becoming more
                     aware of the environmental impact of fashion, and how garment 
                     workers are treated. Secondly, we hated that clothes were made 
                     to be thrown away after a few wears. We made a pact to buy better clothes.</p>
                <p>We realised it’s a lot easier said than done.</p>
                <p>Hours of research. Too many tabs and too little information. 
                    Our questions remained — how was it made? Who made it? Can we
                     trust the brand? Constantly thinking,
                     why is it this hard to understand the true cost of clothes.</p>
            </div>
        </div>       
    )
}

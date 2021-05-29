

export default function Review() {
    return (
        <div className="info-reviews">
            <div className="num-sign">
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
            
                <h2>Read about the <a href="">story of Good Garms</a></h2>

                <div className="signup">
                    <h1>Get the goods</h1>
                    <p>Learn about sustainability and how you can make 
                        your clothes last longer. Enter your email for occasional
                        updates.</p>
                        <div className="new-letter">
                            <input type="email" placeholder='Your Email'/>
                            <button>SIGN UP</button>
                        </div>
                    <span>No spam, unsubscribe at any time</span>
                </div>
            </div>

            <div className="faq-que">
                <div className="faqs">
                    <h1>FAQs</h1>
                    <p>Here’s some questions that have
                        cropped up so far. For anything
                        else — get us at <a href="">help.good@gmail.com</a></p>
                </div>
            </div>
        </div>       
    )
}

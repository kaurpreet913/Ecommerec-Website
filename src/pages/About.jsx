import React from "react";
import './CSS/About.css';
import { Link } from "react-router-dom";



const About =() => {
    return(
        <>
        <div className="cont">
            <div className="help-box">
                <section className="contact-section">
                    <div className="details">
                        <h2>About us</h2>
                        <p>Need help? Our FAQs might just have the answer. If you can’t find what you’re looking for, please get in touch with our friendly teams, using the relevant contact information for your query below on contact page.</p>
                    </div>
                </section>
            </div>
        </div>
        <div className="why">
            <div className="why-box">
                <section className="why-section">
                    <img src='assets/why.jpg' alt="Aboutus" />
                    <div className="whydetails">
                        <h2>Why us</h2>
                        <p>At our grocery store, we take pride in offering a diverse range of high-quality products including fresh fruits and vegetables, delicious sweets, fine wines, premium cuts of meat, and convenient frozen products. Our commitment to excellence extends to our exceptional service, with friendly and knowledgeable staff ready to assist you with personalized recommendations. Visit us today and experience the difference</p>
                    </div>
                </section>
            </div>
        </div>






        <div className="container-fluid mt-3">
            <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#FFA500' }}>
                <div className="container p-4 pb-0">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                            <img src={'assets/logo.png'} alt="logoimage" height="70" />
                            <p>Your one-stop destination for fresh groceries items.We source our products from trusted suppliers toensure  the highest quality and freshness.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Useful Link</h5>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <Link  to="/login" style={{ textDecoration: 'none', color: 'white' }} className="px-2">Login</Link>
                                </li>
                                <li>
                                  <Link style={{ textDecoration: 'none', color: 'white' }} to='/Signup'>Signup</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Corporate</h5>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <Link to="/about" className="text-white">About Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Here to help</h5>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="https://mail.google.com/" className="text-white">jasmankr@gmail.com</a>
                                </li>
                                <li>
                                    <li>01922 476362</li>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="mb-4" />
                    <section className="mb-4 text-center">
                        <a className="btn btn-outline-light btn-floating m-1" 
                          href="https://www.yell.com/biz/fishley-convenience-store-walsall-10687942/" role="button">
                            <i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1"
                            href="https://www.google.com/search?q=fishley+convenience+store&rlz=1C1YTUH_enIN1075IN1075&oq=fish&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIUCAEQRRg5GEMYgwEYsQMYgAQYigUyCAgCEEUYJxg7MgwIAxAAGEMYgAQYigUyDAgEEAAYQxiABBiKBTIMCAUQABhDGIAEGIoFMgwIBhAAGEMYgAQYigUyDAgHEAAYQxiABBiKBTIMCAgQLhhDGIAEGIoFMgwICRAAGEMYgAQYigXSAQgyMDQ1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8" 
                            role="button"><i className="fab fa-google"></i></a>
                        <a className="btn btn-outline-light btn-floating m-1"
                            href="https://www.instagram.com/thegrocerofficial/?hl=enhttps://www.instagram.com/explore/search/keyword/?q=grocery%20shopping&hl=en"
                            role="button"
                            ><i className="fab fa-instagram"></i></a>
                        
                    </section>
                </div>
            </footer>
        </div>    
        </>

    );
};

export default About;
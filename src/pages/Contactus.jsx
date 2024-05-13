import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './CSS/Contactus.css';
const Contact = () => {
    const [contact, setContact] = useState({
        name:'',
        email:'',
        message:'',
    });

    const handleChange= (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]:value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle the form submission, e.g., sending the data to your server
        console.log(contact);
        alert('Thankyou you for contacting us!');
        // Reset form after submission
        setContact({
            name:'',
            email:'',
            phoneno:'',
            message:'',
        });
    };
    
    return (
        <>
            <div className="cont">
              <div className="help-box">
                <section className="contact-section">
                    <div className="details">
                        <h2>Contact us</h2>
                        <p>Need help? Our FAQs might just have the answer. If you can’t find what you’re looking for, please get in touch with our friendly teams, using the relevant contact information for your query below.</p>
                    </div>
                </section>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <section id="contact-details" className="contact-section my-5">
                <div className="details">
                    <h1>Want to talk to Customer Services?</h1>
                    <p>It’s easy to get in touch with our award-winning Customer Services team.<br />Here’s how to speak to one of our friendly, planet-loving team about your sustainable shop.</p>
                </div>
            </section>
            <section>
                <div className="contact">
                    <div style={{ textAlign: 'left' }}>
                        <i className="fas fa-envelope-open-text"></i>
                        <p>Email: <a href="mailto:jasmankr@gmail.com">jasmankr@gmail.com</a></p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <i className="fas fa-phone-volume"></i>
                        <p>Call <a href="tel:01922476362">01922476362</a><br />Our lines are open 8am to 9pm Mon-Sun</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <i className="fas fa-user-edit"></i>
                        <p>2 Fishley Ln, Bloxwich, Walsall WS3 3PR</p>
                    </div>
                </div>
            </section>
            <section className="map-section">
                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d77498.82353416368!2d-2.075661658363607!3d52.62676731765591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x48709f61f6ced367%3A0x6bdacacf52c2baae!2s2%20Fishley%20Ln%2C%20Bloxwich%2C%20Walsall%20WS3%203PR!3m2!1d52.6267959!2d-1.9932615!5e0!3m2!1sen!2suk!4v1709804782988!5m2!1sen!2suk" 
                    width="600" 
                    height="450"  
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Google Map">
                </iframe>
                <div className="meassge-placeholder">
                    <h2> Leave a message</h2>
                    <form onSubmit={handleSubmit}>
                        <div> 
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" value={contact.name} onChange={handleChange} />
                        </div>
                        <div> 
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" value={contact.email} onChange={handleChange} />
                        </div>
                        <div> 
                            <label htmlFor="name">Phone Number:</label>
                            <input type="text" name="phoneNo" value={contact.phoneno} onChange={handleChange} />
                        </div>
                        <div> 
                            <label htmlFor="name">Message:</label>
                            <textarea id="message" name="message" value={contact.message} onChange={handleChange} required rows="4" />
                        </div>
                        <button type="submit">Send Message </button>

                    </form>
                </div>
            </section>

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
                                    <Link style={{ textDecoration: 'none', color:'white' }} to='/About'>About</Link>
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

export default Contact;

import React, {useState} from 'react';

import {images} from '../../Constants';
import {withAppWrap, withMotionWrap} from '../../HOC';
import { urlFor, client } from '../../Api/sanity';


import './Footer.scss';



const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { email, name, message} = formData;
    const handleChangeInput = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name,
            email,
            message
        }

        client.create(contact)
        .then(()=>{setLoading(false);setIsFormSubmitted(true);})
    }

    return (
        <>
            <h2 className="head-text">My <span className="variant-2">contacts</span></h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email"/>
                    <a href="mailto:bohdan1trush@gmail.com" className="p-text">
                        bohdan1trush@gmail.com
                    </a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile"/>
                    <a href="tel:+38 (097) 414-02-12" className="p-text">
                        +38 (097) 414-02-12
                    </a>
                </div>
            </div>
            {!isFormSubmitted ? (
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput}/>
                    </div>
                    <div className="app__flex">
                        <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput}/>
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            placeholder="Your Message"
                            value={message}
                            name="message"
                            onChange={handleChangeInput}
                        ></textarea>
                    </div>
                    <button type="button" disabled={loading} className="p-text" onClick={handleSubmit}>
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            ) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in touch!
                    </h3>
                </div>
            )}

        </>
    );
};

export default withAppWrap(withMotionWrap(Footer, 'app__footer'), 'footer', 'footer-container');
import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi';
import { withMotionWrap, withAppWrap } from '../../HOC';
import { useTranslation } from "react-i18next";
import { urlFor, client } from '../../Api/sanity';

import './Testimonial.scss';



const classNames = [
    ['circle-1', 'circle-position-8', 'circle-type-5'],
    ['circle-3', 'circle-position-6', 'circle-type-3'],
    ['circle-4', 'circle-position-10', 'circle-type-2'],
]

const Testimonial = () => {
    const [brands, setBrands] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);


    const onClickHandler = (index) => {
        setCurrentIndex(index)
    }

    useEffect(()=>{
        const query = '*[_type == "testimonials"]';
        const brandsnceQuery = '*[_type == "brands"]';

        client.fetch(query)
            .then((data)=> {
                setTestimonials(data);
            })

        client.fetch(brandsnceQuery)
            .then((data)=> {
                setBrands(data);
            })
    }, []);


    return (
        <>
            <h2 className="head-text">Testimonial</h2>
            {testimonials.length && (
                <>
                    <div 
                        className="app__testimonial-item app__flex"
                    >
                        <img 
                            src={urlFor(testimonials[currentIndex]?.image)} 
                            alt="Testimonial"
                        />
                        <div 
                            className="app__testimonial-content"
                        >
                            <p
                                className="p-text"
                            >
                                {testimonials[currentIndex]?.feedback}
                            </p>
                            <div>
                                <h4 
                                    className="bold-text"
                                >
                                    {testimonials[currentIndex]?.name}
                                </h4>
                                <h5 
                                    className="p-text"
                                >
                                    {testimonials[currentIndex]?.company}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div
                        className="app__testimonial-btns app__flex"
                    >
                        <div
                            className="app__flex"
                            onClick={() => onClickHandler(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
                        >
                            <HiChevronLeft/>
                        </div>
                        <div
                            className="app__flex"
                            onClick={() => onClickHandler(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
                        >
                            <HiChevronRight/>
                        </div>
                    </div>
                </>
            )}
            <div
                className="app__testimonial-brands app__flex"
            >
                {brands.map(brand => {
                    return(
                        <motion.div
                            whileInView={{opacity: [0,1]}}
                            transition={{duration: 0.5, type: 'tween'}}
                            key={brand._id}
                        >
                            <img src={urlFor(brand.image)} alt={brand.name}/>
                        </motion.div>
                    )
                })}
            </div>
        </>
    );
};

export default withAppWrap(withMotionWrap(Testimonial, 'app__testimonial'), 'testimonial', 'testimonial-container', classNames);


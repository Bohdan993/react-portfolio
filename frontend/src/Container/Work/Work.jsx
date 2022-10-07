import React, {useState, useEffect} from 'react';
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';
import {withAppWrap, withMotionWrap} from '../../HOC';
import { useTranslation } from "react-i18next";

import { urlFor, client } from '../../Api/sanity';


import './Work.scss';


const classNames = [
    ['circle-2', 'circle-position-3', 'circle-type-1'],
    ['circle-2', 'circle-position-4', 'circle-type-3'],
    ['circle-3', 'circle-position-7', 'circle-type-2'],
    ['circle-3', 'circle-position-8', 'circle-type-4'],
    ['circle-4', 'circle-position-1', 'circle-type-5'],
    ['circle-5', 'circle-position-6', 'circle-type-5'],
]


const Work = () => {

    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({opacity: 1});
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);


    const onClickHandler = (category) => {
        setActiveFilter(category);
        setAnimateCard([{opacity: 0}]);

        let timeout = setTimeout(()=>{
            setAnimateCard([{opacity: 1}]);
            clearTimeout(timeout);

            if(category === "All") {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter(work=>work.tags.includes(category)));
            }
        }, 500);
    }

    useEffect(()=>{
        const query = '*[_type == "works"]';

        client.fetch(query)
            .then((data)=> {
                setWorks(data);
                setFilterWork(data);
            })
    }, []);

    return (
        <>
            <h2 
                className="head-text"
            >
                {t('my')} <span>{t('works')}</span>
            </h2>
            <div className="app__work-filter">
                {['HTML/CSS', 'Emails', 'React JS', 'Opencart', 'All'].map((cat, i)=>{
                    return (
                        <div key={i}
                            onClick={()=> onClickHandler(cat)}
                            className={`app__work-filter-item app__flex p-text ${activeFilter === cat ? 'item-active' :  ''}`}
                        > 
                        {cat}
                        </div>
                    )
                })}
            </div>
            <motion.div
                animate={animateCard}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className={`app__work-portfolio`}
            >
                {filterWork.map((work, i)=>{
                    return(
                        <div className='app__work-item app__flex'
                            key={i}
                        >
                            <div className="app__work-img app__flex"
                            >
                                <img src={urlFor(work.image)} alt={work.name}/>
                                <motion.div
                                    whileHover={{opacity: [0, 1]}}
                                    transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                                    className="app__work-hover app__flex"
                                >
                                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                                        <motion.div
                                            whileInView={{scale: [0, 1]}}
                                            whileHover={{scale: [1, 0.9]}}
                                            transition={{duration: 0.25}}
                                            className="app__flex"
                                        >
                                            <AiFillEye/>
                                        </motion.div>
                                    </a>
                                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                                        <motion.div
                                            whileInView={{scale: [0, 1]}}
                                            whileHover={{scale: [1, 0.9]}}
                                            transition={{duration: 0.25}}
                                            className="app__flex"
                                        >
                                            <AiFillGithub/>
                                        </motion.div>
                                    </a>
                                </motion.div>
                            </div>
                            <div className="app__work-content app__flex">
                                <h4 className="bold-text">
                                    {work.title}
                                </h4>
                                <p className="p-text" style={{marginTop: 10}}>{work.description}</p>
                                <div
                                    className='app__work-tag app__flex'
                                >
                                    <p className="p-text">{work.tags[0]}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </motion.div>
        </>
    );
};

export default withAppWrap(withMotionWrap(Work, 'app__works'), 'work', 'work-container', classNames);
import React, {useState, useEffect, Fragment} from 'react';
import { motion } from 'framer-motion';
import withAppWrap from '../../HOC/withAppWrap';
import { useTranslation } from "react-i18next";
import ReactTooltip from "react-tooltip";

import { urlFor, client } from '../../Api/sanity';

import './Skills.scss';


const classNames = [
    ['circle-3', 'circle-position-4', 'circle-type-4'],
    ['circle-2', 'circle-position-2', 'circle-type-3'],
]

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [experiences, setExperiences] = useState([]);


    useEffect(()=>{
        const query = '*[_type == "skills"]';
        const experienceQuery = '*[_type == "experiences"]';

        client.fetch(query)
            .then((data)=> {
                setSkills(data);
            })

        client.fetch(experienceQuery)
            .then((data)=> {
                setExperiences(data);
            })
    }, []);
    return (
        <>
           <h2 className="head-text">Skills & <span>Experience</span></h2>
           <div className="app__skills-container">
            <motion.div className="app__skills-list">
                {skills?.map((skill)=>{
                    return (
                        <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.5}}
                            className="app__skills-item app__flex"
                            key={skill._id}
                        >
                        <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                            <img src={urlFor(skill.icon)} alt={skill.name}/>
                        </div>
                        <p className="p-text">{skill.name}</p>
                    </motion.div>
                    )
                })}
            </motion.div>
            <motion.div className='app__skills-exp'>
                {experiences?.map((experience, ind)=>{
                    return (
                            <motion.div
                                className="app__skills-exp-item"
                                key={experience._id}
                            >
                                <div className="app__skills-exp-year">
                                    <p className="bold-text">{experience.year}</p>
                                </div>
                                <motion.div className="app__slills-exp-works" >
                                        {experience?.works?.map((work)=>{
                                            console.log(work);
                                            return (
                                            <Fragment key={work._key}>
                                                <motion.div
                                                    whileInView={{opacity: [0, 1]}}
                                                    transition={{duration: 0.5}}
                                                    className="app__skills-exp-work"
                                                    data-tip
                                                    data-for={work.name}
                                                >
                                                    <h4 className="bold-text">{work.name}</h4>
                                                    <p className="p-text">{work.company}</p>
                                                    <ReactTooltip
                                                        id={work.name}
                                                        effect="solid"
                                                        arrowColor="#fff"
                                                        className="skills-tooltip"
                                                    >
                                                        {work.description}
                                                    </ReactTooltip>
                                                </motion.div>
                                            </Fragment>
                                            )
                                        })}
                                </motion.div>
                            </motion.div>
                    )
                })}
            </motion.div>
           </div>
        </>
    );
};

export default withAppWrap(Skills, 'skills', 'skills-container', classNames);


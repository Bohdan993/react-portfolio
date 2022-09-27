
import React from 'react';
import {withAppWrap} from '../../HOC';

import { motion } from 'framer-motion';
import { images }  from '../../Constants'
import { useTranslation } from "react-i18next";


import './Header.scss';




const variants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 0.75,
            ease: "easeInOut"
        }
    }
}

const Header = () => {
      const { t } = useTranslation();
    return (
        <div
            className="app__header app__flex"
        >
            <motion.div
                whileInView={{x: [-100, 0], opacity: [0, 1]}}
                transition={{duration: 0.75}}
                className="app__header-info"
            >
                <div
                    className="app__header-badge"
                >
                    <div
                        className="badge-cmp app__flex"
                    >
                        <span>
                            👋
                        </span>
                        <div
                            style={{marginLeft: 20}}
                        >
                            <p
                                className="p-text"
                            >
                                {t('hello_i_am')}
                            </p>
                            <h1
                                className="head-text"
                            >
                                {t('bohdan')}
                            </h1>
                        </div>
                    </div>
                    <div
                        className="tag-cmp app__flex"
                    >
                            <p
                                className="p-text"
                            >
                                Веб розробник
                            </p>
                            <p
                                className="p-text"
                            >
                                Freelancer
                            </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.75, delayChildren: 0.5}}
                className="app__header-img"
            >
                <img
                    src={images.profile}
                    alt="Profile"
                ></img>
                <motion.img
                    whileInView={{scale: [0, 1]}}
                    transition={{duration: 1, ease: "easeInOut"}}
                    src={images.circle}
                    alt="Profile Circle"
                    className="overlay_circle"
                >

                </motion.img>
            </motion.div>
            <motion.div
                variants={variants}
                whileInView={variants.whileInView}
                className="app__header-circles"
            >
                {[images.redux, images.react, images.javascript, images.css, images.api].map((c, i)=>(
                    <div
                        className="circle-cmp app__flex"
                        key={`circle-${i}`}
                    >
                        <img
                            src={c}
                            alt="Circle"
                        >
                        </img>

                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default withAppWrap(Header, 'home');
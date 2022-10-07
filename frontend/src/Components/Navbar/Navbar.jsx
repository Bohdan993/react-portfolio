import React, {useState, useMemo} from 'react';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageSelect } from '../../Components/LanguageSelect';
import './Navbar.scss';
import { images } from '../../Constants';
import { useTranslation } from "react-i18next";



const variants = {
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.1, duration: 0.75 },
      
    }),
    exit: (custom) =>({
        opacity: 0,
        x: 100,
        transition: { delay: custom * 0.1, duration: 0.75 }
    })
  }





const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const { t } = useTranslation();
    const menuItems = useMemo(()=> [t('home'), t('about'), t('portfolio'), t('skills'), t('contacts')], [t]);
    return (
        <nav
            className="app__navbar"
        >
            <div
                className="app__navbar-logo"
            >
                <img
                    src={images.logo}
                    alt="logo"
                ></img>
            </div>
            <ul
                className="app__navbar-links"
            >
                { menuItems.map(item=>(
                    <li
                        key={item}
                        className="app__flex p-text"
                    >
                        <div>

                        </div>
                        <a
                            href={`#${item}`}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
                <LanguageSelect />
            <div
                className="app__navbar-menu"
            >
                <span className="app__navbar-menu-btn_open">
                    <HiMenuAlt4
                        onClick={()=>setToggle(true)}
                    ></HiMenuAlt4>
                </span>
                <AnimatePresence>
                    {
                        toggle && (
                            <motion.div
                                initial={{ x: '100%'}}
                                animate={{ x: 0}}
                                exit={{ x: '100%' }}
                                transition={{duration: 0.75, ease: 'easeOut'}}
                            >
                                <span className="app__navbar-menu-btn_close">
                                    <HiX
                                        onClick={()=>setToggle(false)}
                                    ></HiX>
                                </span>
                                <ul
                                    className="app__navbar-links"
                                >
                                    { menuItems.map((item, index) => (
                                        <motion.li
                                            key={item}
                                            custom={index}
                                            initial="exit"
                                            animate="visible" 
                                            exit="exit"
                                            variants={variants}
                                        >
                                            <a
                                                href={`#${item}`}
                                                onClick={()=>setToggle(false)}
                                            >
                                                {item}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
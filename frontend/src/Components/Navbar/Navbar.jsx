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
    const menuItems = useMemo(()=> [
        {name: t('home'), id: 'home'}, 
        {name: t('about'), id: 'about'}, 
        {name: t('portfolio'), id: 'work'}, 
        {name: t('skills'), id: 'skills'}, 
        {name: t('contacts'), id: 'contacts'}
    ], [t]);
    console.log(menuItems);
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
                { menuItems.map(item=>{return (
                    <li
                        key={item.id}
                        className="app__flex p-text"
                    >
                        <div>

                        </div>
                        <a
                            href={`#${item.id}`}
                        >
                            {item.name}
                        </a>
                    </li>
                )})}
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
                                            key={item.id}
                                            custom={index}
                                            initial="exit"
                                            animate="visible" 
                                            exit="exit"
                                            variants={variants}
                                        >
                                            <a
                                                href={`#${item.id}`}
                                                onClick={()=>setToggle(false)}
                                            >
                                                {item.name}
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
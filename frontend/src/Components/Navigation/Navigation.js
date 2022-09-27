import React from 'react';

const Navigation = ({active}) => {
    return (
        <div className="app__navigation">
                {['home', 'about', 'portfolio', 'skills', 'testimonials','contacts'].map((item, i)=>(
                        <a
                            href={`#${item}`}
                            key={item + i}
                            className="app__navigation-dot"
                            style={active===item ? {backgroundColor: '#313BAC'} : {}} 
                        >
                        </a>
                ))}
        </div>
    );
};

export default Navigation;
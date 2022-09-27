import React from 'react';
import {SocialMedia} from '../Components/SocialMedia';
import {Navigation} from '../Components/Navigation';

const withAppWrap = (Component, idName, classNames) => function HOC(props) {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia/>
            <div className="app__wrapper app__flex">
                <Component {...props}/>
                <div className="copyright"
                >
                    <p className="p-text">
                        {new Date().getFullYear()} Bohdan
                    </p>
                    <p className="p-text">
                        All rights reserved
                    </p>
                </div>
            </div>
            <Navigation active={idName}/>
        </div>
    );
}

export default withAppWrap;
import React from 'react';
import {SocialMedia} from '../Components/SocialMedia';
import {Navigation} from '../Components/Navigation';
import {Circles} from '../Components/Circles';

const withAppWrap = (Component, idName, classNames, circlesClassNames) => function HOC(props) {
    return (
        <div id={idName} className={`app__container ${classNames ? classNames: ''}`}>
            {/* <SocialMedia/> */}
            <Circles classNames={circlesClassNames}/>
            <div className="app__wrapper app__flex">
                <Component {...props}/>
                {/* <div className="copyright"
                >
                    <p className="p-text">
                        {new Date().getFullYear()} Bohdan
                    </p>
                </div> */}
            </div>
            {/* <Navigation active={idName}/> */}
        </div>
    );
}

export default withAppWrap;
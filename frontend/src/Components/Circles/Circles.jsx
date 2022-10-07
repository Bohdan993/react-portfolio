import React from 'react';
import { getRandomInt } from '../../Utils/getRandomInt';
import './Circles.scss';


const Circles = ({classNames = []}) => {
    return (
        <div className="circles">
            {
                classNames.map(c=> {
                    return (
                        <div key={c.join(' ')} className={`circle ${c.join(' ')}`}></div>
                    )
                })
            }

        </div>
    );
};

export default Circles;
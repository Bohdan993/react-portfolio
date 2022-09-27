import React, {useState, useEffect} from 'react';
import {withAppWrap} from '../../HOC';
import {motion} from 'framer-motion';
import './About.scss';

import {images} from '../../Constants';
import { urlFor, client } from '../../Api/sanity';


const testData = [
    {
        title: 'Web develop',
        description: 'I am a developer',
        image: images.about01
    },
    {
        title: 'UI/UX designer',
        description: 'I am a developer',
        image: images.about02
    },
    {
        title: 'Analytic',
        description: 'I am a developer',
        image: images.about03
    },
    {
        title: 'SEO',
        description: 'I am a developer',
        image: images.about04
    }
]

const About = () => {

    const initialState = {
        data: [],
        error: null,
        loading: true
    }

    const [data, setData] = useState(initialState);
    

    const fetchData = async (client, query) => {
        // setData(initialState);
        try {
            const result = await client.fetch(query);
            setData({
                data: result,
                loading: false,
                error: false
            });
        } catch(error) {
            setData({
                data: null,
                loading: false,
                error
            });
        }
    }

    useEffect(()=>{
        const query = '*[_type == "abouts"]';

        fetchData(client, query);
        
    }, []);

    const {error, loading, data: abouts} = data;

    if(error) {
        return <div>Something gone wrong</div>
    }

    // console.log(abouts)

    if(loading) {
        return <div>Loading</div>
    }

    return (
        <>
            <h2 
                className="head-text"
            >
                I know that 
                <span> Good Design</span>
                <br/>
                means
                <span> Good Business</span>
            </h2>

            <div className="app__profiles">
                {
                    abouts.map((t, i)=>(
                        <motion.div
                            key={t.title}
                            whileInView={{opacity: 1}}
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.5, type: 'tween'}}
                            className="app__profile-item"
                        >
                            <img
                                src={urlFor(t.image)}
                                alt={t.title}
                            ></img>
                            <h2
                                className="bold-text"
                                style={{marginTop: 20}}
                            >
                                {t.title}
                            </h2>
                            <p
                                className="p-text"
                                style={{marginTop: 10}}
                            >
                                {t.description}
                            </p>
                        </motion.div>
                    ))
                }
            </div>
        </>
    );
};

export default withAppWrap(About, 'about');
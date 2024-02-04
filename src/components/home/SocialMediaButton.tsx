import { motion } from 'framer-motion';
import React, { useState } from 'react'

interface props{
    name: string,
    url: string
}

function SocialMediaButton (props: props): React.ReactNode {
    const [selectedButton, setSelectedButton] = useState<boolean>(false);
    const parentAnimation = {
        normal :{
            color: 'black',
            
        },
        hover : {
            color: 'white',
        }
    }

    const childAnimation = {
        normal : {
            width:'0%'
        },
        hover: {
            width:'100%',
            transition: { duration: 0, width: { type: "spring", stiffness: 50 } },
        },
    };


    return (
        <motion.a
            className="text-inherit font-ibmmono flex flex-col "
            animate={selectedButton ? 'hover' : 'normal'}
            variants={parentAnimation}
            target="_blank"
            rel="noreferrer"
            href={props.url}
            onHoverStart={() => {setSelectedButton(true)}}
            onHoverEnd={() => {setSelectedButton(false)}}
        >
            <p className='z-20'> {props.name} </p>
            <motion.div 
                animate={selectedButton ? 'hover' : 'normal'}
                variants={childAnimation}
                className='absolute bg-black '>
                    &nbsp;
            </motion.div>
        </motion.a>

    );
}

export default SocialMediaButton

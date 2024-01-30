import React, { useRef } from 'react'
import CursorBlinker from './CursorBlinker';
import {  motion, useInView } from 'framer-motion';
import useTextWriteAppear from '../../hooks/useText';


function LittleResume (): React.ReactNode {
    const defaulttext = " Hello👋 I'm a full-stack developer working in Chile, Valdivia"
    const ref = useRef(null);
    const isOnView = useInView(ref)


    return (
        <motion.p  ref={ref} className='font-ibmmono w-[200px] z-50'>
            <motion.span>{useTextWriteAppear(defaulttext, isOnView)}</motion.span>
            <CursorBlinker/>
        </motion.p>
    );
}

export default LittleResume

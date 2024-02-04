import { motion } from "framer-motion";
import React from 'react'

const cursorVariants = {
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
        }
    }
};

function CursorBlinker()  : React.ReactNode{
    return (
        <motion.div
            variants={cursorVariants}
            animate="blinking"
            className="inline-block h-5 w-[2px] translate-y-1 bg-slate-500"
        />
    );
}

export default CursorBlinker;
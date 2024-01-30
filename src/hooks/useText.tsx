import { type MotionValue, animate, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function useTextWriteAppear(text:string, isOnView: boolean) :  MotionValue<string>{
    const baseText = text
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.slice(0, latest)
    );

    useEffect(() => {
        console.log(isOnView, text)
        const controls = animate(count, baseText.length, {
            type: "tween",
            duration: 1.5,
            ease: "easeInOut", 
        });
        if(isOnView){
            controls.play();
        }else{
            count.set(0);
            controls.stop();
            
        }   


    }, [isOnView]);

    return displayText
}

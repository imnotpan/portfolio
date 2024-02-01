import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard';
import projectsData from '../../data/Projects.json'
import { motion } from "framer-motion"
import { useStoreProjects } from '../../store/StoreProjects';

function GameDevProjects (): React.ReactNode {
    const carouselref = React.useRef<HTMLInputElement>(null);
    const [carouselWidth, setCarouselWidth] = useState<number | undefined>();
    const setDragged = useStoreProjects((state) => state.setDragged)
    

    useEffect( () => {
        const handleResize = ():void => {
            if (carouselref.current?.scrollWidth !== undefined) {
                setCarouselWidth(carouselref.current.scrollWidth - carouselref.current.offsetWidth);
            }   

        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
        
    },[document.body.clientWidth]) 

    const handleDragEnd = (info: any):void => {
        setDragged(false);


    };

    return (
        <motion.div
            ref={carouselref}
            drag="x"
            onDragStart={() => {setDragged(true)}}
            onDragEnd={(event, info) => {handleDragEnd(info)}}
            dragConstraints={{ right: 0, left: -(carouselWidth ?? 0) }}
            className='w-full flex'
        >
            {projectsData.projects.map((project, index) => 
                (
                    <ProjectCard 
                        key={index}
                        headerTitle={project.headertitle} 
                        mainTitle={project.mainTitle} 
                        description={project.description} 
                        mainImage={project.mainImage} 
                        images={project.images} 
                        tags={project.tags} 
                        redirectLink={project.redirectLink} />
                ))
            }
            
        </motion.div>

    );
}

export default GameDevProjects

import React from 'react'
import ProjectCard from './ProjectCard';
import Kamoki from '../../assets/projects/kamoki.png'
import nomorethan13legs from '../../assets/projects/nomorethan13legs.png'
import littlecleaner from '../../assets/projects/littlecleaner.png'
import { motion } from "framer-motion"

function GameDevProjects (): React.ReactNode {
    return (
        <motion.div className='flex w-full'>
            <ProjectCard 
                img={Kamoki} 
                headertitle={'GAME JAM PROTOTYPE'} 
                maintitle={'KAMOKI'} 
                description={'This is a prototype game made for the weekly game jam #128 - camouflage'} 
                tags={['GAME MAKER', 'ASEPRITE', 'GAMEJAM']} />
            <ProjectCard 
                img={nomorethan13legs} 
                headertitle={'TRIJAM PROTOTYPE'} 
                maintitle={'KAMOKI'} 
                description={'An entry for "TriJam #46: 13 legs is a weird game made in just 3 hours, the main concept around the game is not '} 
                tags={['UNITY', 'PHOTOSHOP', 'TRIJAM']} />
            <ProjectCard 
                img={littlecleaner} 
                headertitle={'YOGCAST GAME JAM'} 
                maintitle={'LITTLE CLEANER'} 
                description={'Little Cleaner" is a entry for YogCast GameJam 2019 with the theme, Giving. ...'} 
                tags={['UNITY', '3D', 'BLENDER']} />
            <ProjectCard 
                img={littlecleaner} 
                headertitle={'YOGCAST GAME JAM'} 
                maintitle={'LITTLE CLEANER'} 
                description={'Little Cleaner" is a entry for YogCast GameJam 2019 with the theme, Giving. ...'} 
                tags={['UNITY', '3D', 'BLENDER']} />
            <ProjectCard 
                img={littlecleaner} 
                headertitle={'YOGCAST GAME JAM'} 
                maintitle={'LITTLE CLEANER'} 
                description={'Little Cleaner" is a entry for YogCast GameJam 2019 with the theme, Giving. ...'} 
                tags={['UNITY', '3D', 'BLENDER']} />    
        </motion.div>
    );
}

export default GameDevProjects

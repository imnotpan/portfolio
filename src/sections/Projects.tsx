import React from 'react'

import ProjectCard from '../components/projects/ProjectCard';
import Kamoki from '../assets/projects/kamoki.png'
import nomorethan13legs from '../assets/projects/nomorethan13legs.png'
import littlecleaner from '../assets/projects/littlecleaner.png'


function Projects (): React.ReactNode {
    return (
        <section id='projects' className='w-full h-full flex flex-row overflow-hidden'>
            <div className='w-full flex flex-col bg-gray-200'>
                <button className='w-full h-full hover:bg-black hover:text-white border 
                                border-b-0 border-r-0 border-black'>
                    devs
                </button>
                <button className='w-full h-full  hover:bg-black hover:text-white border 
                                border-b-0 border-r-0 border-black'>                    
                    games
                </button>
                <button className='h-full w-full  hover:bg-black hover:text-white border 
                                border-b-0 border-r-0 border-black'>                    
                    design
                </button>
            </div>
            <div className='w-full flex '>

                <div className='w-full flex inline-flex '>
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
                </div>
            </div>
        </section>
    );
}

export default Projects


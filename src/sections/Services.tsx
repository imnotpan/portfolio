import React from 'react'
import BrushIcon from '../assets/services_icons/BrushIcon.svg'
import ProgrammingIcon from '../assets/services_icons/ProgrammingIcon.svg'
import VideoGameIcon from '../assets/services_icons/VideoGameIcon.svg'
import TagElement from '../components/services/TagElement';


function Services (): React.ReactNode {
    return (
        <div className='w-full h-full bg-white z-10'>
            <div className='mx-24 lg:mx-64 my-4'>
                <span className='font-nunito text-2xl '> services </span>
                <div className='mt-8 flex flex-row font-nunito  items-center text-center space-x-10'>
                    <div className='flex-1'>
                        <div className='w-full mb-4'>
                            <img className='mx-auto w-12'  src={BrushIcon}></img>
                        </div>
                        <span className='text-2xl'> FULL STACK DEVELOP </span>
                        <p className='text-center  text-md mt-5 text-gray-600'>
                            I enjoy creating music visualizers and designing 
                            minimalist interfaces for websites. 
                        </p>
                        <div className='mt-4 text-left'>
                            <span> Tools: </span>
                            <div className='flex flex-wrap  justify-left  '>
                                <TagElement name='REACT'/>
                                <TagElement name='PYTHON'/>
                                <TagElement name='NODE'/>
                                <TagElement name='MARIADB'/>
                                <TagElement name='POSTGRESQL'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='w-full mb-4'>
                            <img className='mx-auto w-12'  src={ProgrammingIcon}></img>
                        </div>
                        <span className='text-2xl'> GAME DEVELOPER </span>
                        <p className='text-center  text-md mt-5 text-gray-600'>
                            I enjoy creating music visualizers and designing 
                            minimalist interfaces for web pages
                        </p>
                        <div className='mt-4 text-left'>
                            <span> Tools: </span>
                            <div className='flex flex-wrap  justify-left  '>
                                <TagElement name='UNITY'/>
                                <TagElement name='GODOT'/>
                                <TagElement name='GAME MAKER'/>
                                <TagElement name='C#'/>
                                <TagElement name='GDM'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='w-full mb-4'>
                            <img className='mx-auto w-12'  src={VideoGameIcon}></img>
                        </div>
                        <span className='text-2xl '> DESIGNER / ARTIST </span>
                        <p className='text-center text-md mt-5 text-gray-600'>
                            I have a passion for crafting music visualizers and 
                            creating minimalist designs for web pages.
                        </p>
                        <div className='mt-4 text-left'>
                            <span> Tools: </span>
                            <div className='flex flex-wrap justify-left  '>
                                <TagElement name='PHOTOSHOP'/>
                                <TagElement name='PROCREATE'/>
                                <TagElement name='AFTER EFFECTS'/>
                                <TagElement name='PREMIERE'/>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services

import React from 'react'
import BrushIcon from '../assets/services_icons/BrushIcon.svg'
import ProgrammingIcon from '../assets/services_icons/ProgrammingIcon.svg'
import VideoGameIcon from '../assets/services_icons/VideoGameIcon.svg'
import TagElement from '../components/services/TagElement';


function Services (): React.ReactNode {
    return (
        <section id='services' className='w-full h-full bg-white z-10 flex flex-col md:flex-row
                                        items-center justify-center text-left  '>
            <div>
                <p className='font-dugaspro text-9xl tracking-widest break-words  '>
                    A LOT OF <br/>
                    THINGS <br/>
                    i DO ......
                </p>
            </div>
            <div className='mt-10'>
                <div className='flex sm:flex-row flex-col w-full '>
                    <p className='font-bold text-xl mr-16 w-10 lg:w-32 ml-4'> 
                        FRONTEND
                        <span className='hidden sm:inline'> <br/> </span>
                        DEVELOP  
                    </p>
                    <div className='mx-4'>
                        <p> sistem programming and web design </p>
                        <div className='flex'>
                            <p className='mt-1 font-bold'> TOOLS </p>
                            <TagElement name={'React'}/> 
                            <TagElement name={'Angular'}/>                    
                            <TagElement name={'VUE'}/>                    
                            <TagElement name={'JS / TS'}/>                    

                        </div>
                    </div>
                </div>
                <hr className='bg-black h-[2px]'/>

                <div className='flex sm:flex-row flex-col w-full mt-8'>
                    <p className='font-bold text-xl mr-16 w-10 lg:w-32 ml-4 '>
                        BACKEND 
                        <span className='hidden sm:inline'> <br/> </span>
                        DEVELOP  
                    </p>
                    <div className='mx-4'>
                        <p> sistem programming and web design </p>
                        <div className='flex'>
                            <p className='mt-1 font-bold'> TOOLS </p>
                            <TagElement name={'React'}/> 
                            <TagElement name={'Python'}/>                    
                            <TagElement name={'React'}/>                    
                            <TagElement name={'React'}/>                    

                        </div>
                    </div>
                </div>
                <hr className='bg-black h-[2px]'/>

                <div className='flex sm:flex-row flex-col w-full mt-8'>
                    <p className='font-bold text-xl mr-16 w-10 lg:w-32 ml-4'> 
                        VIDEO GAME 
                        <span className='hidden sm:inline'> <br/> </span> 
                        DEVELOP  
                    </p>
                    <div className='mx-4'>
                        <p> sistem programming and web design </p>
                        <div className='flex'>
                            <p className='mt-1 font-nunito font-bold'> TOOLS </p>
                            <TagElement name={'React'}/> 
                            <TagElement name={'Python'}/>                    
                            <TagElement name={'React'}/>                    
                            <TagElement name={'React'}/>                    
                        </div>
                    </div>
                </div>
                
                <hr className='bg-black h-[2px]'/>
                <div className='flex sm:flex-row flex-col w-full mt-8'>
                    <p className='font-bold text-xl mr-16 w-10 lg:w-32 ml-4'> 
                        ARTIST 
                        <span className='hidden sm:inline'> <br/> </span>
 
                        DESIGNER 
                    </p>
                    <div className='mx-4'>
                        <p> sistem programming and web design </p>
                        <div className='flex'>
                            <p className='mt-1 font-bold'> TOOLS </p>
                            <TagElement name={'React'}/> 
                            <TagElement name={'Python'}/>                    
                            <TagElement name={'React'}/>                    
                            <TagElement name={'React'}/>                    

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Services

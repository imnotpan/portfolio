import React from 'react'
import ServiceSection from '../components/services/ServiceSection';


function Services (): React.ReactNode {
    return (
        <section id='services' className='relative w-full h-full bg-white z-10 flex flex-col md:flex-row
                                        items-center justify-center text-left overflow-hidden '>
            <div className='mb-10' >
                <p className='font-dugaspro text-9xl tracking-widest break-words  '>
                    A LOT OF <br/>
                    THINGS <br/>
                </p>
            </div>
            <div className='my-10'>
                <ServiceSection 
                    topMainName = {'FRONTEND'}
                    bottomMainName= {'DEVELOP'}
                    name={'WEB SITES AND WEB APPS'} 
                    tags={['react', 'angular', 'vue', 'js-ts']} />
                <hr className='bg-black h-[2px]'/>            
                <ServiceSection 
                    topMainName = {'BACKEND'}
                    bottomMainName= {'DEVELOP'}
                    name={'DATABASES - REST/API AND DATA ANALYSIS'} 
                    tags={['python', 'js-ts', 'sql']} />
                <hr className='bg-black h-[2px]'/>
                <ServiceSection 
                    topMainName = {'VIDEO GAME'}
                    bottomMainName= {'DEVELOP'}
                    name={'ARCADE GAMES FOR MOBILE AND WEBS'} 
                    tags={['godot', 'unity', 'gamemaker']} />
                <hr className='bg-black h-[2px]'/>
                <ServiceSection 
                    topMainName = {'ARTIST'}
                    bottomMainName= {'DESIGNER'}
                    name={'PIXEL & DIGITAL ART'} 
                    tags={['procreate', 'photoshop', 'afterfx']} />
            </div>
        </section>
    );
}

export default Services

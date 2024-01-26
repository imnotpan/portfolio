import React from 'react'
import Avatar from '../assets/Avatar.svg'

import Ellipse from '../assets/planets/Ellipse.svg'
import Ellipse2 from '../assets/planets/Ellipse2.svg'
import Ellipse3 from '../assets/planets/Ellipse3.svg'


function Home (): React.ReactNode {
    return (
        <>
            <section id='home' 
                className='h-screen w-full relative overflow-y-hidden '>

                <div className='absolute w-full h-full text-left md:text-center lg:text-center z-20'>
                    <div className='leading-null break-words  mt-16'>
                        <div className='w-full bg-yellow-400'>
                            <p className='text-xl lg:mr-[700px] ml-[2%]'>
                                i&apos;m &lt;
                                <span className='font-bold'>Kevin Medina</span>
                                &gt;
                            </p>
                        </div>
                        <div className='text-8xl lg:text-9xl md:text-8xl '>
                            <p className='font-archivoblack text-wrap '>DEVELOPER</p>
                            <p className=' font-archivoblack webkit-text-blue-500 outline-text'>
                                & DESIGNER.
                            </p>
                        </div>
                    </div>
                    <div className='fixed top-[50%] right-[50%]'>
                        <img src={Avatar}/>
                    </div>
                </div>
                <div className=' absolute flex bottom-0 z-10 w-full justify-center'>
                    <div className=' flex w-full justify-center lg:ml-64 md:ml-64 ml-16'>
                        <img className=' lg:size-[50vh] md:size-[45vh] max-w-[50vh] ' src={Avatar} alt="Avatar"/>
                        <p className='font-ibmmono w-[200px] hidden md:block'>
                            Hello👋 <br/>
                            I&apos;m a full-stack developer working in Chile, Valdivia
                        </p>
                    </div>

                </div>

                <div id='circles' className='w-full h-full flex justify-center items-center z-5'>                
                    <img className='absolute' src={Ellipse}/>
                    <img className='absolute' src={Ellipse2}/>
                    <img className='absolute' src={Ellipse3 }/>
                </div>

             
            </section>

        </>
    );
}

export default Home



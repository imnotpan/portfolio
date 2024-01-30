import React from 'react'
import Avatar from '../assets/Avatar.svg'


import SocialMediaButton from '../components/home/SocialMediaButton'
import BackgroundPlanets from '../components/home/BackgroundPlanets'


function Home (): React.ReactNode {


    return (
        <>
            <section id='home' 
                className='h-screen w-full relative overflow-y-hidden  overflow-x-hidden z-10'>
  
                <div className='absolute w-full h-full text-left md:text-center lg:text-center z-10'>
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
                        <img className=' lg:size-[50vh] md:size-[45vh] max-w-[50vh] translate-y-[10px]' src={Avatar} alt="Avatar"/>
                        <div className='z-50'>

                            <p className='font-ibmmono w-[200px] hidden md:block'>
                                Hello👋 <br/>
                                I&apos;m a full-stack developer working in Chile, Valdivia
                            </p>
                            <hr/>
                            <div className='mt-4 flex flex-col hidden md:block'>
                                <SocialMediaButton name={'Twitter'} url={'https://twitter.com/imnotapan'}/>
                                <SocialMediaButton name={'Instagram'} url={'https://www.instagram.com/imnotapan/?hl=es'}/>
                            </div>
                        </div>
                    </div>

                </div>


                <BackgroundPlanets/>
             
            </section>

        </>
    );
}

export default Home



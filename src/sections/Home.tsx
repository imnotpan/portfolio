import React from 'react'
import Avatar from '../assets/Avatar.svg'
import GithubIcon from '../assets/GithubIcon.svg'
import DiscordIcon from '../assets/DiscordIcon.svg'
import GmailIcon from '../assets/GmailIcon.svg'
import instagramIcon from '../assets/instagramIcon.svg'
import Ellipse from '../assets/planets/Ellipse.svg'
import Ellipse2 from '../assets/planets/Ellipse2.svg'
import Ellipse3 from '../assets/planets/Ellipse3.svg'
import Planet from '../assets/planets/Planet.svg'
import Point from '../assets/planets/Point.svg'
import Star from '../assets/planets/Star.svg'



function Home (): React.ReactNode {
    return (
        <section id='home' 
            className='h-screen w-full relative '>
            <div className='absolute w-full h-full text-left md:text-center lg:text-center z-20'>
                <div className='leading-null break-words  mt-16'>
                    <p className='text-xl lg:mr-[700px] ml-[2%]'>
                        i&apos;m &lt;
                        <span className='font-bold'>Kevin Medina</span>
                        &gt;
                    </p>
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
            <div className='absolute flex bottom-0 z-10 w-full justify-center'>
                <div className=' flex w-full lg:w-[300px] w-[45vh]'>
                    <img className='' src={Avatar} alt="Avatar"/>
                </div>
            </div>
            <div className='w-full h-full flex justify-center items-center z-5'>                
                <img className='fixed' src={Ellipse}/>
                <img className='fixed' src={Ellipse2}/>
                <img className='fixed' src={Ellipse3 }/>
            </div>
        </section>
    );
}

export default Home

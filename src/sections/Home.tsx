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
        <div id='home' 
            className='h-screen w-full relative'>
            <div className='w-full h-full items-center justify-center text-left  lg:text-center '>
                <div className='leading-null pt-[15%] break-words'>
                    <p className='text-xl lg:mr-[700px]'>
                        i&apos;m &lt;
                        <span className='font-bold'>Kevin Medina</span>
                        &gt;
                    </p>
                    <div>
                        <p className='font-archivoblack text-9xl text-wrap '>DEVELOPER</p>
                        <p className=' font-archivoblack webkit-text-blue-500 outline-text
                                        text-9xl'>
                            & DESIGNER.
                        </p>
                    </div>
                </div>
                <div className='fixed top-[50%] right-[50%]'>
                    <img src={Avatar}/>
                </div>
            </div>



        </div>
    );
}

export default Home

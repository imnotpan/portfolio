import React from 'react'
import SocialMediaButton from '../components/home/SocialMediaButton'
import BackgroundPlanets from '../components/home/BackgroundPlanets'
import MainHeader from '../components/home/MainHeader';
import MyInfo from '../components/home/MyInfo';


function Home (): React.ReactNode {


    return (
        <section
            
            className='section__page ' id='home'>
            <div
                className='overflow-x-hidden section flex flex-col h-screen w-full relative overflow-y-hidden  overflow-x-hidden z-0'>
                <div className='mt-5 md:mt-24'>
                    <MainHeader/>
                </div>
                <MyInfo/>
                <BackgroundPlanets/>
            </div>
            <div className='block md:hidden bg-white z-10 relative'>
                <div className='w-full z-50 text-2xl '>
                    <div className='border border-1 border-black'>
                        <SocialMediaButton name={'> Twitter'} url={'https://twitter.com/imnotapan'}/>
                    </div>
                    <div className='border border-1 border-black border-t-0 '>
                        <SocialMediaButton name={'> Instagram'} url={'https://www.instagram.com/imnotapan/?hl=es'}/>
                    </div>
                    <div className='border border-1 border-black border-t-0 '>
                        <SocialMediaButton name={'> Github'} url={'https://github.com/imnotpan'}/>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Home



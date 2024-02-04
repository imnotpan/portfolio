import React from 'react'
import FullScreenOverview from './components/projects/FullScreenOverview';
import NavBar from './sections/NavBar';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import { useStoreOverview } from './store/StoreOverview';
import SocialMediaButton from './components/home/SocialMediaButton';

function App (): React.ReactNode {
    const isFullScreenOverviewActive = useStoreOverview((state) => state.isFullScreenOverviewActive)
    const topFunction = ():void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className='flex flex-col w-full'>
            {!isFullScreenOverviewActive && <div className='fixed mix-blend-difference z-[200] right-0 bottom-0 p-2 md:p-12 sm:scale-[1] scale-[0.7]'>
                <button 
                    onClick={topFunction}
                    className='font-bold mix-blend-difference p-5 rounded-full 
                        md:hover:zoom-buttom  text-black bg-white'>
                    <p> {"UP"} </p>
                </button>
            </div>
            }
            {isFullScreenOverviewActive && <FullScreenOverview/>} 
            {!isFullScreenOverviewActive && <NavBar/>} 
            <Home/>
            <AboutMe/>
            <Services/>
            <Projects/>
            <div className='relative z-10 bg-white text-5xl sm:text-8xl text-center overflow-x-hidden overflow-y-hidden'>
                <SocialMediaButton name={'HIRE ME'} url={'mailto:imnotapan@gmail.com'}/>
            </div>
            <Footer/>

        </div>
    );
}

export default App


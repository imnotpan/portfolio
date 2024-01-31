import React from 'react'
import FullScreenOverview from './components/projects/FullScreenOverview';
import NavBar from './sections/NavBar';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import { useStoreOverview } from './store/StoreOverview';


function App (): React.ReactNode {
    const isFullScreenOverviewActive = useStoreOverview((state) => state.isFullScreenOverviewActive)

    return (
        <div className='flex flex-col'>
            {isFullScreenOverviewActive && <FullScreenOverview 
                mainTitle={''} 
                mainDescription={''} 
                tags={[]} 
                mainImage={''} 
                images={[]}/>} 
            {!isFullScreenOverviewActive && <NavBar/>} 
            <Home/>
            <AboutMe/>
            <Services/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App


import React from 'react'
import ProjectCard from './ProjectCard';
import projectsData from '../../data/Projects.json'
import { useStoreProjects } from '../../store/StoreProjects';
import Slider from "react-slick";
import ButtonSlider from './buttons/ButtonSlider';



function GameDevProjects (): React.ReactNode {
    const setDragged = useStoreProjects((state) => state.setDragged);
    const slider = React.useRef(null);


    const handleBeforeChange = (currentSlide: number, nextSlide: any):void => {
        if (currentSlide !== nextSlide) {
            setDragged(true);
        }
    };
    
    const handleAfterChange = ():void => {
        setDragged(false);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],
        beforeChange: handleBeforeChange,
        afterChange: handleAfterChange,
    };

    return (
        <section className='relative flex flex-col w-full group/button'>

            <div className='visible sm:invisible absolute right-0 h-full items-center  flex'>
                <ButtonSlider 
                    sliderRef={() => { (slider.current as any)?.slickNext()}}
                    symbol={'>'} />
            </div>
            <div className='visible sm:invisible absolute left-0 h-full items-center flex'>
                <ButtonSlider 
                    sliderRef={() => { (slider.current as any)?.slickPrev()}}
                    symbol={'<'} />
            </div>
            <Slider ref={slider} className='w-full  ' {...settings} >
                {projectsData.projects.map((project, index) => 
                    (
                        <ProjectCard 
                            key={index}
                            headerTitle={project.headertitle} 
                            mainTitle={project.mainTitle} 
                            description={project.description} 
                            mainImage={project.mainImage} 
                            images={project.images} 
                            tags={project.tags} 
                            redirectLink={project.redirectLink} />
                    ))
                }
            </Slider>
        </section>

    );
}

export default GameDevProjects

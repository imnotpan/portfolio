import React from 'react'
import Designs from '../../data/Designs.json'
import Slider from 'react-slick'
import ButtonSlider from './buttons/ButtonSlider'
import ImageCoverDesign from './ImageCoverDesign';



function CoverCarousel (): React.ReactNode {
    const slider = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
                breakpoint: 1800,
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
    };

    return (
        <div className='relative flex w-screen h-full group/button'>
            <div className='absolute right-0 h-full items-center z-50 flex mix-blend-difference'>
                <ButtonSlider 
                    sliderRef={() => { (slider.current as any)?.slickNext()}}
                    symbol={'>'} />
            </div>
            <div className='absolute left-0 h-full items-center flex'>
                <ButtonSlider 
                    sliderRef={() => { (slider.current as any)?.slickPrev()}}
                    symbol={'<'} />
            </div>

            <Slider 
                {...settings}
                ref={slider}
                className=' w-full h-full ' >
                {Designs.Designs.map((cover) => (
                    <ImageCoverDesign image={cover.path} key={cover.key} name={cover.headertitle}/>
                ))}
            </Slider>
        </div>
    );
}

export default CoverCarousel



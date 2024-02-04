import React from 'react'


interface props {
    sliderRef: () => void;
    symbol: string;
}

function ButtonSlider ( props: props ): React.ReactNode {

    return (
        <div className='mix-blend-difference group/select-button hover:zoom-buttom invisible group-hover/button:visible z-50'>
            <div className='mx-5'>
                <button
                    className=" text-black bg-white p-5 px-7 rounded-full font-archivoblack"
                    onClick={() => {props.sliderRef()}}
                >
                    <p className='group-hover/select-button:tracking-in-expand'>
                        {props.symbol}
                    </p>
                </button>
            </div>
        </div>
    );
}

export default ButtonSlider

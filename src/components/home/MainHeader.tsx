import React from 'react'
import LittleResume from './LittleResume';

function MainHeader (): React.ReactNode {

    return (
        <div className='absolute w-full h-full text-left md:text-center lg:text-center z-50 md:z-10'>
            <div className='leading-null break-words'>
                
                {/* Línea amarilla con texto en negro para contraste */}
                <div className='w-full bg-yellow-400'>
                    <p className='text-xl lg:mr-[700px] ml-[2%] text-black'>
                        i&apos;m &lt;
                        <span className='font-bold'>Kevin Medina</span>
                        &gt;
                    </p>
                </div>
                
                {/* Aquí está la magia: mt-12 en móvil/tablet y mt-16 en escritorio 
                  para separarlo elegantemente de la línea amarilla.
                */}
                <div className='mt-12 lg:mt-16 text-6xl sm:text-4xl md:text-7xl lg:text-7xl ml-2 md:ml-0'>
                    <p className='font-archivoblack text-wrap text-black tracking-tighter'>
                        TECHNICAL
                    </p>
                    <p className='font-archivoblack md:text-8xl lg:text-8xl webkit-text-blue-500 outline-text tracking-tighter'>
                        PIXEL ARTIST.
                    </p>
                </div>
                
                {/* Un poco de margen superior (mt-6) aquí también para separarlo del título gigante */}
                <div className='mt-6 w-1/2 ml-2 md:ml-0 text-xl block md:hidden'>
                    <LittleResume/>
                </div>
                
            </div>
        </div>
    );
}

export default MainHeader
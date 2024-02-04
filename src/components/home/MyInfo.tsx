import React from 'react'
import SocialMediaButton from './SocialMediaButton';
import Avatar from '../../assets/Avatar.svg'
import LittleResume from './LittleResume';


function MyInfo (): React.ReactNode {

    

    return (
        <div className=' absolute flex bottom-0 z-10 md:z-10 w-full justify-center'>
            <div className=' flex w-full justify-center lg:ml-64 md:ml-64 ml-16'>
                <img className=' lg:size-[50vh] md:size-[45vh] max-w-[50vh] translate-y-[10px]' src={Avatar} alt="Avatar"/>
                <div >
                    <div className='hidden md:block'>
                        <LittleResume/>
                    </div>
                    <hr/>
                    <div className='relative z-50 mt-4 flex flex-col hidden md:block '>
                        <SocialMediaButton name={'> Twitter'} url={'https://twitter.com/imnotapan'}/>
                        <SocialMediaButton name={'> Instagram'} url={'https://www.instagram.com/imnotapan/?hl=es'}/>
                        <SocialMediaButton name={'> Github'} url={'https://github.com/imnotpan'}/>
                        <SocialMediaButton name={'> Email'} url={'mailto:imnotapan@gmail.com'}/>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default MyInfo

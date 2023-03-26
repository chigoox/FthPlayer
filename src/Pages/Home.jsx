
import React, { useEffect, useState } from 'react'
import MusicItem from '../componets/MusicItem'
import { getRand } from '../MyCodes/ed5'



function Home() {

    const allSongs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <div className='bg-black w-full relative flex-col felx flex-grow overflow-hidden'>
            <div className=' bg-gradient-to-l relative from-rose-500 via-[#FF194D] flex items-end  to-[#FF194D] h-fit'>
                <h1 className='font-bold text-[4rem] md:text-[6rem] top-6 md:top-[2.15rem] left-4 relative text-  headerText'>5TH Player</h1>
            </div>
            <div className='h-[39rem] md:h-[35rem] text-white mt-2 overflow-hidden overflow-y-scroll'>
                {allSongs.map(item => {
                    return (
                        <MusicItem key={getRand(99999)} />
                    )
                })}






            </div>



        </div>
    )
}

export default Home
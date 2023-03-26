
import React, { useEffect, useState } from 'react'
import MusicItem from '../componets/MusicItem'
import { getRand } from '../MyCodes/ed5'



function Home({ MusicData, setPlayAudio, playAudio }) {

    const allSongs = MusicData ? Object.values(MusicData) : []

    return (
        <div className='bg-black w-full relative flex-col felx flex-grow overflow-hidden'>
            <div className=' bg-gradient-to-l relative from-rose-500 via-[#FF194D] flex items-end  to-[#FF194D] h-fit'>
                <h1 className='font-bold text-[4rem] md:text-[6rem] top-6 md:top-[2.15rem] left-4 relative text-  headerText'>5TH Player</h1>
            </div>
            <div className='h-[39rem] md:h-[35rem] text-white mt-2 overflow-hidden overflow-y-scroll'>
                {allSongs.map(({ title, album, artist, audioLink }) => {
                    return (
                        <MusicItem
                            key={getRand(99999)}
                            title={title}
                            album={album}
                            artist={artist}
                            audioLink={audioLink}
                            setPlayAudio={setPlayAudio} />

                    )
                })}






            </div>



        </div>
    )
}

export default Home
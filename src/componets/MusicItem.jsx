import React, { useState } from 'react'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { BsFillPauseFill, BsFillPlayFill, BsHeart } from 'react-icons/bs'
import { MdPlaylistAdd } from 'react-icons/md'

function MusicItem({ title, album, artist, audioLink, setPlayAudio }) {
    const player = document.getElementById("PLAYER")
    const [playPause, setPlayPause] = useState(false)
    const toggleplay = () => {
        setPlayAudio(audioLink)
        setPlayPause(!playPause)
        if (playPause == false) player.play()
        if (playPause == true) player.pause()
    }

    return (
        <div className='border-gray-600 hover:scale-105 relative trans md:hover:left-10 left-0 px-2 last:mb-96 border-y-2 bg-black-800 my-2 flex items-center h-12'>
            <div className='md:w-[50%] h-full w-full flex items-center justify-between'>
                <h1 className='font-bold text-sm md:text-xl'>{title}</h1>
                <div className='text-xs md:text-md'>by {artist} in {album}</div>
                <div className='center gap-4 text-3xl'>
                    <button onClick={() => { toggleplay() }} className='hover:scale-125 trans hover:text-rose-500'>
                        {!playPause ? <BsFillPlayFill /> : <BsFillPauseFill />}
                    </button>
                    <button className='hover:scale-125 trans hover:text-rose-500'><BsHeart /></button>
                    <button className='hover:scale-125 trans hover:text-rose-500'><MdPlaylistAdd /></button>
                </div>
            </div>

        </div>
    )
}

export default MusicItem
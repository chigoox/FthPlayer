import React from 'react'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { BsFillPlayFill, BsHeart } from 'react-icons/bs'
import { MdPlaylistAdd } from 'react-icons/md'

function MusicItem() {
    return (
        <div className='border-gray-600 hover:scale-105 relative trans md:hover:left-10 left-0 px-2 last:mb-96 border-y-2 bg-black-800 my-2 flex items-center h-12'>
            <div className='md:w-[50%] h-full w-full flex items-center justify-between'>
                <h1 className='font-bold text-xl'>Bull and the goat</h1>
                <div className='center gap-4 text-3xl'>
                    <button className='hover:scale-125 trans hover:text-rose-500'><BsFillPlayFill /></button>
                    <button className='hover:scale-125 trans hover:text-rose-500'><BsHeart /></button>
                    <button className='hover:scale-125 trans hover:text-rose-500'><MdPlaylistAdd /></button>
                </div>
            </div>

        </div>
    )
}

export default MusicItem
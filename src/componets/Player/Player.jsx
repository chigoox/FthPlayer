import React from 'react'
import { BsFillFastForwardFill, BsFillPlayFill, BsFillRewindFill, BsHeart, BsShuffle } from 'react-icons/bs'
import { TfiLoop } from 'react-icons/tfi'

function Player() {
    return (
        <div className='bg-[#BF2669] h-[6.7rem] z-10 relative'>
            <div className='bg-white h-2 flex items-center w-full '>
                <div className='to-[#702A8C] trans-slow-2x hover:w-full  relative from-[#BF2669] bg-gradient-to-l rounded-l-none rounded-full h-2 w-6'></div>
            </div>

            <div className='flex justify-center  items-center'>
                <div className='bg-white h-16 w-16 m-4'>

                </div>
                <div className='h-full w-fit m-auto center gap-4'>
                    <button className='text-2xl center hover:scale-105 trans-slow text-rose-500'><h1 className='hover:drop-shadow-lg'><BsShuffle /></h1></button>
                    <button className='text-3xl md:text-4xl center hover:scale-105 trans-slow text-rose-500'><h1 className='hover:drop-shadow-lg'><BsFillRewindFill /></h1></button>
                    <button className='text-6xl md:text-8xl center hover:scale-105 trans-slow text-rose-500'><h1 className='hover:drop-shadow-lg'><BsFillPlayFill /></h1></button>
                    <button className='text-3xl md:text-4xl center hover:scale-105 trans-slow text-rose-500'><h1 className='hover:drop-shadow-lg'><BsFillFastForwardFill /></h1></button>
                    <button className='text-2xl center hover:scale-105 trans-slow text-rose-500'><h1 className='hover:drop-shadow-lg'><TfiLoop /></h1></button>
                </div>
                <div className='text-3xl md:text-5xl m-4'>
                    <BsHeart />

                </div>
            </div>

        </div>
    )
}

export default Player
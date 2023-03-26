import React from 'react'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { BsListColumns, BsMusicNoteList } from 'react-icons/bs'
import { RiAlbumFill } from 'react-icons/ri'
function Menu({ toggleMenuSelected, menuSelected }) {
    console.log(menuSelected)
    return (
        <div className='grid  absolute right-0 bottom-24 z-50 hover:border-black text-white h-20 w-20 hover:h-40 hover:w-40 drop-shadow hover:drop-shadow-xl rounded-full bg-rose-400 shadow-white  m-14 hover:gap-3 hover:scale-105 trans-slow border-[#FF194D] border-[17px]   gap-1 grid-cols-2 hover:rotate-[-45deg] grid-rows-2'>

            <button onClick={() => { toggleMenuSelected('Lists') }} className={`${menuSelected?.Lists ? 'border-2 border-white' : ''} bg-rose-700 hover:opacity-100 opacity-75 p-3 z-[1] center rounded-tl-full  hover:scale-150 trans relative group overflow-hidden hover:right-6 right-0 bottom-0 hover:bottom-6`}>
                <h1 className='rotate-45 z-[1] group-hover:text-xl group-hover:left-2 left-0 group-hover:top-2 trans relative  otherText font-bold '>Lists</h1>
                <h1 className='h-full rotate-45 w-full top-0 absolute group-hover:scale-[2] drop-shadow trans border-black  center  text-black text-4xl ' >
                    <BsListColumns />
                </h1>
            </button>
            <button onClick={() => { toggleMenuSelected('All') }} className={`${menuSelected?.All ? 'border-2 border-white' : ''} bg-rose-700 p-3 z-[1] hover:opacity-100 opacity-75 rounded-tr-full hover:scale-[1.35] center trans relative group overflow-hidden hover:left-2 left-0 bottom-0 hover:bottom-2`}>
                <h1 className='rotate-45 z-[1] group-hover:text-xl trans relative otherText font-bold'>Songs</h1>
                <h1 className='h-full rotate-45 w-full top-0 absolute group-hover:scale-[2] drop-shadow trans border-black  center  text-black text-4xl ' >
                    <BsMusicNoteList />
                </h1>

            </button>
            <button onClick={() => { toggleMenuSelected('Add') }} className={`${menuSelected?.Add ? 'border-2 border-white' : ''} bg-rose-700 z-[1] p-3 center hover:opacity-100 opacity-75 rounded-bl-full hover:scale-150 trans relative group overflow-hidden  hover:right-2 right-0 hover:top-2 top-0`}>
                <h1 className='rotate-45 z-[1] group-hover:text-xl trans relative otherText font-bold'>New</h1>
                <h1 className='h-full rotate-45 w-full top-0 absolute group-hover:scale-[2] drop-shadow trans border-black  center  text-black text-4xl ' >
                    <AiOutlineAppstoreAdd />
                </h1>

            </button>
            <button onClick={() => { toggleMenuSelected('Albums') }} className={`${menuSelected?.Albums ? 'border-2 border-white' : ''} bg-rose-700 z-[1] rounded-br-full  hover:scale-[1.35] hover:opacity-100 opacity-75 group overflow-hidden trans relative hover:left-6 left-0 hover:top-4 top-0`}>
                <h1 className='rotate-45 group-hover:right-2 right-0 bottom-0  group-hover:text-xl trans font-bold relative z-[1] otherText'>Albums</h1>
                <h1 className='h-full w-full top-0 absolute group-hover:scale-[2] drop-shadow trans border-black  center  text-black text-4xl ' >
                    <RiAlbumFill />
                </h1>


            </button>

            <img className='rounded-full trans-slow group-hover:scale-110 scale-125 absolute h-full w-full' src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60" alt="" />

        </div>
    )
}

export default Menu
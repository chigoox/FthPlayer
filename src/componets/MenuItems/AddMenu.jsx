import React, { useEffect, useState } from 'react'
import { AiFillCloseSquare, AiOutlineCloudUpload } from 'react-icons/ai'
import { RiFileInfoFill } from 'react-icons/ri'
import { addMusic, handleInput5 } from '../../MyCodes/ed5'
import upload from '../../MyCodes/UploadFile'


function AddMenu({ toggleMenuSelected, menuSelected }) {
    const [uploadType, setUploadType] = useState()
    const [uploadInfo, getUploadInfo] = useState()
    const [songData, setSongData] = useState({})
    const [fileName, setName] = useState()

    let titleInput = document.getElementById("TITLE")?.value

    useEffect(() => {
        setSongData(old => {
            return (
                { ...old, fileName: fileName }
            )
        })
    }, [fileName])
    const openUpload = () => {
        document.getElementById('FILE').click();
    }

    if (uploadInfo) document.getElementById('UPLOADPROGRESS').style.height = `${uploadInfo}%`

    if (uploadInfo == 100) {
        setTimeout(() => {
            addMusic('ED5', 'allSongs', [songData.title + '_' + songData.artist], songData)
            toggleMenuSelected('fill')
            //getUploadInfo(0)
        }, 3000);
    }

    console.log(songData)
    return (
        <div className={`${menuSelected.Add ? '' : 'opacity-0'} z-40 border-white   h-full w-full center flex-col absolute trans-slow-2x`}>
            <div className='bg-black-900 border overflow-hidden h-[32rem] center flex-col w-[20rem] relative shadow-md rounded-xl trans-slow shadow-gray-400'>
                <div id={'UPLOADPROGRESS'} className='absolute   rounded-xl bg-rose-900 w-full trans-slow-2x'></div>
                <div className=' drop-shadow bg-black-800 shadow-white h-[90%] w-[90%]'>
                    <button onClick={() => { toggleMenuSelected('fill') }} className='bg-rose-800 h-10 w-full text-4xl center hover:bg-rose-700 trans hover:text-rose-400'><AiFillCloseSquare /></button>

                    <div className='w-full h-20 center'>

                        <button onClick={() => { setUploadType({ song: true }) }} className={`h-full w-1/2 bg-black text-white hover:text-3xl trans-slow hover:text-rose-500 ${uploadType?.song ? 'text-3xl text-rose-800' : ''}`}><h1 className={`${uploadType?.song && ' animate-pulse'}`}>Add Song</h1> </button>

                        <button onClick={() => { setUploadType({ album: true }) }} className={`h-full w-1/2 bg-black text-white hover:text-3xl trans-slow hover:text-rose-500 ${uploadType?.album ? 'text-3xl text-rose-800' : ''}`}><h1 className={`${uploadType?.album && ' animate-pulse'}`}>Add Album</h1> </button>

                    </div>

                    <div className={`${uploadType?.song ? 'scale-100 top-0' : 'scale-0 top-96'} h-72 trans-slow relative over-y-scroll w-full`}>
                        <input
                            type="file"
                            hidden
                            onChange={({ target }) => { setName(target.files[0].name) }}
                            accept={".mp3,.wav"}
                            multiple={uploadType?.album}
                            name="song"
                            id="FILE" />
                        <button onClick={openUpload} className='text-5xl hover:text-6xl  h-16 trans hover:text-rose-700 m-auto  w-fit text-white my-5 center '><AiOutlineCloudUpload />
                        </button>
                        {(uploadInfo > 0 && uploadInfo != 100) && <div className='absolute top-3 h-12 text-rose-700  right-8 w-20'>
                            <h1 className='text-white h-12 absolute'>{Math.round(uploadInfo)}%</h1>
                        </div>}
                        <div className='text-white absolute brder w-full m-auto top-14 text-center'>{fileName ? fileName : ''}</div>
                        <div className='gap-2 grid   grid-rows trans-slow p-2'>
                            <input name={'title'} onChange={({ target }) => { handleInput5(target.name, target.value, setSongData) }} className='w-full h-10 p-2'
                                id={'TITLE'} placeholder='Song Title'
                                defaultValue={fileName ? fileName : ''} type="text" />
                            <input name={'album'} onChange={({ target }) => { handleInput5(target.name, target.value, setSongData) }} className='w-full h-10 p-2' placeholder='Album Title' type="text" />
                            <input name={'artist'} onChange={({ target }) => { handleInput5(target.name, target.value, setSongData) }} className='w-full h-10 p-2' placeholder='Artist' type="text" />

                            <button onClick={() => { upload(songData.title, setSongData, getUploadInfo) }} className='h-12 w-3/4 hover:scale-110 bg-rose-500 trans drop-shadow shadow-black m-auto'>Upload</button>



                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddMenu
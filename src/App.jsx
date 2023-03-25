import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiFillFacebook, AiFillHome } from "react-icons/ai";
import { BsFillPersonFill, BsNewspaper } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'
import { RiFilePaperFill } from 'react-icons/ri'
import './App.css'
import Menu from './componets/Menu';
import Player from './componets/Player/Player';
import Home from './Pages/Home';

function App() {


  return (
    <div className="App h-screen bg-black flex flex-col justify-between relative overflow-hidden">


      {/* PAGES */}
      <Menu />
      <Home />





      {/* Footer */}
      <Player />
    </div >
  )
}

export default App

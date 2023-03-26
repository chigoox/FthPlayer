import { useEffect, useState } from 'react'


import './App.css'
import Menu from './componets/Menu';
import AddMenu from './componets/MenuItems/AddMenu';
import Player from './componets/Player/Player';
import { FetchMusic } from './MyCodes/ed5';
import Home from './Pages/Home';


function App() {
  const [menuSelected, setMenuSelected] = useState({ All: true })
  const [MusicData, setMusicData] = useState()
  const toggleMenuSelected = (menuItem) => { setMenuSelected({ [menuItem]: true }) }
  console.log(menuSelected)

  useEffect(() => {
    FetchMusic('ED5', 'allSongs', setMusicData)
  }, [])

  console.log(MusicData)

  const [playAudio, setPlayAudio] = useState()

  return (
    <div className="App h-screen bg-black flex flex-col justify-between relative overflow-hidden">

      {/* MENUES */}
      <audio id={'PLAYER'} name={'5THPLAYER'} src={playAudio}></audio>

      <Menu
        toggleMenuSelected={toggleMenuSelected}
        menuSelected={menuSelected}
      />
      {menuSelected.Add && <AddMenu toggleMenuSelected={toggleMenuSelected} menuSelected={menuSelected} />}

      {/* PAGES */}
      <Home MusicData={MusicData} setPlayAudio={setPlayAudio} />





      {/* Footer */}
      <Player playAudio={playAudio} setPlayAudio={setPlayAudio} />
    </div >
  )
}

export default App

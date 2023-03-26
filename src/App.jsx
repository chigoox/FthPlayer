import { useEffect, useState } from 'react'


import './App.css'
import Menu from './componets/Menu';
import AddMenu from './componets/MenuItems/AddMenu';
import Player from './componets/Player/Player';
import Home from './Pages/Home';

function App() {
  const [menuSelected, setMenuSelected] = useState({ All: true })
  const toggleMenuSelected = (menuItem) => { setMenuSelected({ [menuItem]: true }) }
  console.log(menuSelected)




  return (
    <div className="App h-screen bg-black flex flex-col justify-between relative overflow-hidden">

      {/* MENUES */}

      <Menu
        toggleMenuSelected={toggleMenuSelected}
        menuSelected={menuSelected}
      />
      {menuSelected.Add && <AddMenu toggleMenuSelected={toggleMenuSelected} menuSelected={menuSelected} />}

      {/* PAGES */}
      <Home />





      {/* Footer */}
      <Player />
    </div >
  )
}

export default App

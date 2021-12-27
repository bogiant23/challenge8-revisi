import React, { useEffect, useState } from 'react'
import './App.css';
import ListPlayers from './components/list-players/ListPlayers';
import AddPlayerForm from './components/forms/add-player-form/AddPlayerForm';
import EditPlayerForm from './components/forms/edit-player-form/EditPlayerForm';
import FindPlayer from './components/forms/find-player/FindPlayer';
import SearchPlayerList from './components/search-player-list/SearchPlayerList';


const App = () => {

  const playerData = [
    { id: 1, username: 'bogiant', email: 'bogiant@gmail.com', exp: 1500, lvl: 80 },
    { id: 2, username: 'binaracademy', email: 'binarian@gmail.com', exp: 800, lvl: 64 },
    { id: 3, username: 'reacttest', email: 'react@gmail.com', exp: 300, lvl: 35 }
  ]

  const [players, setPlayers] = useState(playerData)

  const [searching, setSearching] = useState(false)
  const [dataSearch, setDataSearch] = useState([])
  const searchPlayer = (search) => {
    setSearching(true)
    let playerTemp = players
    let playerFinal = playerTemp.filter((el) => {
      if (
        el.username.toLowerCase().includes(search) || 
        el.email.toLowerCase().includes(search) ||
        el.exp.toString().includes(search) ||
        el.lvl.toString().includes(search)
      ) {
        // console.log(el);
        return el;
      }
    })
    setDataSearch(playerFinal)
  }
  console.log(dataSearch);
  
  // 2. menambah data player baru
  const addPlayer = (player) => {
    player.id = players.length + 1
    setPlayers([...players, player])
  }

  // 3. update/edit data -> dengan bantuan useEffect method 
  const [editing, setEditing] = useState(false)
  const initialFormState = { 
    id: null, 
    username: '', 
    email: '', 
    exp: '', 
    lvl: '' 
  }
  const [currentPlayer, setCurrentPlayer] = useState(initialFormState) // untuk menampilkan data siapa yang sedang diedit

  // function untuk menampung data yang akan/sedang di edit
  const editPlayer = (player) => {
    setEditing(true)
    setCurrentPlayer({ 
      id: player.id, 
      username: player.username, 
      email: player.email, 
      exp: player.exp, 
      lvl: player.lvl 
    })
  }

  // proses edit data -> update
  const updatePlayer = (id, updatedPlayer) => {
    setEditing(false)
  
    setPlayers(players.map((player) => (
      player.id === id ? updatedPlayer : player
      )
    ))
  }

  // 4. hapus data player -> dengan id
  const deletePlayer = (id) => {
    setPlayers(players.filter((player) => player.id !== id))
  }
  console.log('searching ?', searching);

  return (
    <div className="container">
      <h1>CRUD - Reactjs</h1>
      <div className="flex-row">
        <div className="list-player">
          <h2 className="h2-list-player">LIST PLAYER</h2>
          {searching ? (
            <div>
              <FindPlayer
                setSearching={setSearching}
                searchData={dataSearch}
                onSearchPlayer={searchPlayer}
              />
              <SearchPlayerList playerData={players} searchData={dataSearch} onEditPlayer={editPlayer} onDeletePlayer={deletePlayer} />
            </div>
          ) : (
            <div>
              <FindPlayer
                setSearching={setSearching}
                searchData={dataSearch}
                onSearchPlayer={searchPlayer}
              />
              {/* lempar data players ke komponen listPlayer */}
              <ListPlayers playerData={players} onEditPlayer={editPlayer} onDeletePlayer={deletePlayer} />
            </div>
          )}
        </div>
        <div className="add-player">
          {editing ? (
            <div>
              <h2>EDIT USER</h2>
              <EditPlayerForm
                setEditing={setEditing}
                currentPlayerData={currentPlayer}
                onUpdateUser={updatePlayer}
              />
            </div>
          ) : (
            <div>
              <h2>ADD PLAYER</h2>
              <AddPlayerForm onAddPlayer={addPlayer} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;

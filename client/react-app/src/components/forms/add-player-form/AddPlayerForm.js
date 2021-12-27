import React, { useState } from 'react'
import './AddPlayerForm.css'
// import {Box, TextField} from '@mui/material';

const AddPlayerForm = (props) => {
    // menngkapt data player sementara dari inputan form 
    const initialFormState = { id: null, username: '', email: '', exp: '', lvl: '' }
    const [player, setPlayer] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setPlayer({ ...player, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault() // untuk menghentikan behavior defaut tag form (mematikan refresh otomatis ketikan di submit)

        if (!player.username || !player.email || !player.exp || !player.lvl) return // untuk menghandle inputan kosong agar tidak di proses
        props.onAddPlayer(player)
        setPlayer(initialFormState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={player.username}
                onChange={handleInputChange}
            />
            <label className="label">Email</label>
            <input
                type="email"
                name="email"
                value={player.email}
                onChange={handleInputChange}
            />
            <label className="label">Experience</label>
            <input
                type="text"
                name="exp"
                value={player.exp}
                onChange={handleInputChange}
            />
            <label className="label">Level</label>
            <input
                type="text"
                name="lvl"
                value={player.lvl}
                onChange={handleInputChange}
            />
            <button className="button-add">Add new player</button>
        </form>
    )
}

export default AddPlayerForm
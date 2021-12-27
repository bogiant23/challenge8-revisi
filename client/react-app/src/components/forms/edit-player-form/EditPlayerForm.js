import React, { useState, useEffect } from 'react'
import './EditPlayerForm.css'

const EditPlayerForm = (props) => {
    const [player, setPlayer] = useState(props.currentPlayerData)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setPlayer({ ...player, [name]: value })
    }

    // using effect hook
    useEffect(() => {
        setPlayer(props.currentPlayerData)
    }, [props])

    return (
        <form
        onSubmit={(event) => {
            event.preventDefault()

            props.onUpdateUser(player.id, player)
        }}
        >
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
            <button className="button-add">Update player</button>
        </form>
    )
}

export default EditPlayerForm
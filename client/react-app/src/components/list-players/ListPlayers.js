import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {IconButton} from '@mui/material';
import { Delete, Edit} from '@mui/icons-material';
// import { Link } from 'react-router-dom';

// argumen props -> menangkap perubahan/value yang terjadi di web/app.js 
const ListPlayers = (props) => (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Experience</TableCell>
            <TableCell>Lvl</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.playerData.map((player) => (
            <TableRow
              key={player.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {player.username}
              </TableCell>
              <TableCell>{player.email}</TableCell>
              <TableCell>{player.exp}</TableCell>
              <TableCell>{player.lvl}</TableCell>
              <TableCell>
                    <IconButton 
                        aria-label="Edit" 
                        onClick={() => {
                            props.onEditPlayer(player)
                        }} 
                        color="primary">
                
                        <Edit fontSize="small"/>
                    </IconButton>
                <IconButton 
                    aria-label="delete" 
                    onClick={() => { if (window.confirm('Are you sure you wish to delete this player?')) props.onDeletePlayer(player.id)}} color="error" >
                    <Delete fontSize="small"/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
)

export default ListPlayers
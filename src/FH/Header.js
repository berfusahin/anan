import React from 'react'
import "../style/Header.css"
import {Link} from "react-router-dom"

import logo from "../img/logo.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from "@mui/material/TextField";


export default function Header() {
    return (
        <div className='header'>
            <div className='sol'>
                <img src={logo} alt="" className='logo' />
            </div>

            <div className='orta'>
                <Link to="/" > HOME </Link>
                <Link to="/works" > SEARCH </Link>
                <Link to="/contact" > CONTACT US </Link>
            </div>

            <div className='sağ'>
            <TextField
                id="outlined-basic"
                variant="outlined"
                label="Search"
            />
                <AccountCircleIcon />
            </div>
        </div>
    )
}
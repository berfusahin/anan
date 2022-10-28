import React from 'react'
import "../style/Home.css"

import poster from "../img/movie.jpg"

export default function Home() {
    return (
        <div className='home'>

            <div className='sol' ></div>

            <div className='orta'>
                <h3>Genre</h3>
                <img src={poster} alt="" style={{ width:"300px", height:"auto"}} />
                <img src={poster} alt="" style={{ width:"300px", height:"auto"}} />
                <img src={poster} alt="" style={{ width:"300px", height:"auto"}} />
                <img src={poster} alt="" style={{ width:"300px", height:"auto"}} />
                <img src={poster} alt="" style={{ width:"300px", height:"auto"}} />
                <img src={poster} alt="" style={{ width:"300px", height:"auto"}} />
            </div>

            <div className='sağ'></div>
            
        </div>
    )
}
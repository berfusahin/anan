import React from 'react'
import "../style/Footer.css"

import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';


export default function Footer() {
    return (
        <div className='footer'>
            <div className='yazı'>
                <h3> This site made because of Software Enginnering class. There is no copyright issues because of that. If you got any question just mail us. Peace! </h3>
            </div>

            <div className='Contact-info'>
                <EmailIcon />
                <p>xxx@gmail.com</p>
                <PhoneInTalkIcon />
                <p>0538 *** ** **</p>
            </div>  
        </div>
    )
}
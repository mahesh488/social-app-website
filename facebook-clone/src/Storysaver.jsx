import React from 'react'
import { Avatar } from '@material-ui/core';
import VpnLockIcon from '@material-ui/icons/VpnLock';
const Storysaver = ({id,name,photourl,message,image}) => {
    
    return (
        <div className="storysaver">
               <div className="story_left">
               <Avatar />
                <h4>{name}</h4>
            </div>
            <div className="info">
                <p style={{ marginTop: '-24px', marginLeft: '43px', color: 'gray' }}>01:40PM</p>
                <VpnLockIcon style={{ marginTop: '-39px', color: 'black', fontSize: '16px' }} />
            </div>
            <p style={{ color: 'gray', fontWeight: 'bolder', marginTop: '20px', marginLeft: '10px' }}>{message}</p>
            <div className="background_image">
                <img src={photourl} />
            </div>

        </div>
    )
}

export default Storysaver

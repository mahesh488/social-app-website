import react from 'react';
import "./css/storypost1.css";
import { Avatar } from '@material-ui/core';
import VpnLockIcon from '@material-ui/icons/VpnLock';

const Storypost1=({id,name,url,message})=>{
    return(
           <div className="Storypost1">
                <div className="story_left">
               <Avatar />
                <h4>{name}</h4>
            </div>
            <div className="info">
                <p style={{ marginTop: '-24px', marginLeft: '43px', color: 'gray' }}>01:40PM</p>
                <VpnLockIcon style={{ marginTop: '-39px', color: 'black', fontSize: '16px' }} />
            </div>
            <p style={{ color: 'gray', fontWeight: 'bolder', marginTop: '20px', marginLeft: '10px' }}></p>
            <div className="background_image">
                <img src={url}/>
            </div>

           </div>
    )
}
export default Storypost1;
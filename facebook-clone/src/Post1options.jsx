import react from 'react';
import './css/Post1options.css';
import {Avatar} from '@material-ui/core';
import HttpsIcon from '@material-ui/icons/Https';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
const Postoptions1 = ({id,name,message,timestamp}) => {
    return (
        <div className="Post1options">
            <div className="postoptions_left">
             <Avatar/>
             <h4>Mahesh </h4>
             <p>{timestamp}</p>
             <HttpsIcon/>
            </div>
           <div className="postoptions_right">
           <MoreHorizIcon/>
        </div>
        </div>
    )
}
export default Postoptions1;
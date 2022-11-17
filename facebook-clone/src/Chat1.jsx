import React, { useState } from "react";
import './css/chat1.css';
import { IconButton } from '@material-ui/core';
import { Modal } from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import CloseIcon from '@material-ui/icons/Close';
import PanToolIcon from '@material-ui/icons/PanTool';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { useStatevalue } from './StateProvider';
import RightSidebar1 from './RightSidebar1';
import {db} from './firebase';
const Chat = ({id,name,data1}) => {
    const [chat, setChat] = useState(false);
    const[{user},dispatch]=useStatevalue();
    const[message,setMessage]=useState([]);
    const roomData = () => {
        setChat(true);
    }
    const handle=()=>{
        setChat(false);
    }
   
    const createRoom=()=>{
        const data=prompt("Add your room");
        alert(data);
        if(data){
            db.collection('room2').add({
                name:data
                
              })
           
        }
    }
    return (
        <>
            <Modal open={chat}>
                <div className="model_top">
                    <div className="model_top1">
                     <CloseIcon style={{marginLeft:'466px',color:'gray'}} onClick={handle}/>
                    </div>
                    <div className="model_top2">
                    <IconButton onClick={roomData}>
                        <VideoCallIcon style={{ color: 'red', cursor: 'pointer', fontSize: '40px', marginLeft: '200px' }} />
                    </IconButton>
                    <h1 style={{marginLeft:'100px'}}>Create your room</h1>
                    </div>
                    <div className="model_top3">
                     <IconButton>
                         <PanToolIcon style={{color:'#ff8c00'}}/>
                     </IconButton>
                     <h3>Room name</h3>
                     
                     <p style={{marginTop:'50px',marginLeft:'-90px',color:'gray'}}>{user.displayName}</p>
                    </div>
                    <div className="model_top4">
                     <IconButton>
                         <AccessAlarmIcon style={{color:'#ff8c00'}}/>
                     </IconButton>
                     <h3>Start time</h3>
                     
                     <p style={{marginTop:'50px',marginLeft:'-50px',color:'gray'}}>now</p>
                      </div>
                    <div className="model_bottom">
                     <p style={{textAlign:'center',color:'gray'}}>Your room isnt availbale until you invite people after you have create it</p>
                     <button onClick={createRoom}>CREATE ROOM</button>
                    </div>
                </div>
            </Modal>
            <div className="chat">
                <div className="chat_info">
                  <h1>{name}</h1>
                    <IconButton onClick={roomData}>
                        <VideoCallIcon style={{ color: 'red', cursor: 'pointer', fontSize: '40px', marginLeft: '20px' }} />
                    </IconButton>
                    <h1>Create room</h1>
                </div>
       
            </div>
           
        </>
    )
}
export default Chat;
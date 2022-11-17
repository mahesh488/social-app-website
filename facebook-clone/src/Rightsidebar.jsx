import React, { useState, useEffect } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './css/rightsidebar.css';
import { IconButton, Modal } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { db } from './firebase';
import Chat1 from './Chat1';
import RightSidebar1 from './RightSidebar1';
const Rightsidebar = () => {
    const [message, setMessage] = useState(false);
    const[data1,setData]=useState([]);
     const handlechange = () => {
        setMessage(true)
    }
    const handledata = () => {
        setMessage(false)
    }
    const handledata1 = () => {
        setMessage(true)
    }
  useEffect(() => {
    db.collection('room2').onSnapshot(snapshot => {
        setData(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))
    })

}, [])

  
    return (

        <div className="rightsidebar">
            <div className="right_options">
                <p style={{ marginLeft: '30px' }}>Group Conversations</p>
            </div>

            <div className="chat_options">
                <IconButton onClick={handledata1}>
                    <AddIcon style={{ marginTop: '-430px', marginLeft: '-300px' }} />
                </IconButton>
                <h4 style={{ marginLeft: '-120px', marginTop: '-300px', color: 'darkblack', fontWeight: 'bolder', fontSize: '15px' }}>Create New Group</h4>
            </div>
            <Modal open={message} onClose={handlechange}>
                <div className="model">
                    <div className="chat_data">
                        <h1>New Message</h1>

                        <CloseIcon onClick={handledata} style={{ marginLeft: '380px', cursor: 'pointer', color: '#1778f2' }} />
                        <p1 style={{ marginTop: '80px', fontSize: '20px', marginLeft: '-410px' }}>To</p1>
                    </div>
                    <div className="chat_medium">
                        <h4 style={{ margin: '60px -178px', marginBottom: '-140px', fontSize: '25px', color: '#1778f2' }}>Suggested</h4>
                    </div>
                </div>
            </Modal>
            <RightSidebar1/> 
      
            <div className="right_sidebar_chat">
                <Chat1 addchat />
            
            </div>
        </div>


    )
}

export default Rightsidebar

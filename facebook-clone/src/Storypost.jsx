import React, { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core';
import VpnLockIcon from '@material-ui/icons/VpnLock';
import './css/storypost.css';
import { useStatevalue } from './StateProvider';
import { db } from './firebase';
import Storysaver from './Storysaver';
const Storypost = () => {
    const [message, setMessage] = useState([])
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setMessage(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])
    return (
      
        <div className="storypost">
               {
          message.map(msg=>{
             return <Storysaver key={msg.id} id={msg.id} name={msg.data.name} photourl={msg.data.photoUrl} message={msg.data.message}/>
          })
         }
  
         
        </div>

    )
}

export default Storypost

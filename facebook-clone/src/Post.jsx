import React, { useState } from "react";
import './css/Post.css';
import { Avatar, Modal, IconButton } from "@material-ui/core";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CloseIcon from '@material-ui/icons/Close';
import { db,storage } from './firebase';
import { useStatevalue } from "./StateProvider";
import firebase from 'firebase';
import Storypost1 from './Storypost1';
import Storysaver from './Storysaver';
import Chat1 from './Chat1';
const Post = () => {
    const [{ user }, dispatch] = useStatevalue();
    const [open, setOpen] = useState(false);
    const[posts,setPosts]=useStatevalue();
    const[image,setImage]=useState("");
    const[progress,setProgress]=useState();
    const[message,setMessage]=useState("hii");
    const[data,setData]=useState([]);
    const[data1,setData1]=useState([]);
    const handelchanger = () => {
        setOpen(false)
    }
    const handleopen = () => {
        setOpen(true)
    }
    const postdata=()=>{
      setPosts(true);
    }
    const uploadfile=()=>{
        document.getElementById("upload").click()
    }
    const uploadfile1=(e)=>{
         if(e.target.files[0]){
          setImage(e.target.files[0]);
           
         }
         
        }
   const postsubmit=(e)=>{
         e.preventDefault();
         if(image===""){
            db.collection('posts').add({
                message:message,
                name:user.displayName,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                
              })  
             
          }
          else{
                const uploadTask=storage.ref(`/images/${image.name}`).put(image);
                uploadTask.on(
                 "state_changed",
                 (snapshot)=>{
                     const progress=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                     setProgress(progress);
                 },
                 (error)=>{
                     console.log(error);
                     alert(error.message);
                 },
                 ()=>{
                     storage.ref("images").child(image.name).getDownloadURL().then(url=>{
                         db.collection('posts').add({
                             timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                             message:message,
                             username:user.displayName,
                             image:url
                         })
                          
                        })
                 }

                )
             
          }
        handelchanger();
          setProgress(0);
     }
        return (
        <>
          <div className="data">
          {
          data.map(msg=>{
             return <Storypost1 key={msg.id} id={msg.id} name={msg.name} image={msg.image}  message={msg.message} timestamp={msg.timestamp}/>
          })
         }
               
          </div>
        <div className="data1">
        {
            data1.map(msg1=>{
                return <Storysaver url={msg1.url}/>
            })
        }
        </div>
            <Modal open={open} onClose={handelchanger}>
                <div className="model_top">
                    <form>
                        <div className="model_heading">
                            <h1 style={{ fontWeight: 'bolder' }}>Create Post</h1>
                            <IconButton onClick={handelchanger}>
                                <CloseIcon style={{ marginTop: '-100px', marginLeft: '400px' }} />
                            </IconButton>
                        </div>
                    </form>
                    <div className="model_mid">
                        <form>
                            <Avatar />
                            <h1 className="btn4">{user.displayName}</h1>
                            <input type="text" className="btn2"  placeholder="what on your mind dear" onChange={e=>setMessage(e.target.value)} />
                        </form>
                    </div>
                    <div className="model_bottom">
                        <h1 style={{ marginBottom: '-50px' }}>Add your post</h1>
                        <div className="icons">
                            <IconButton>
                                <AddPhotoAlternateIcon onClick={uploadfile} style={{ color: '	#90ee90', cursor: 'pointer', fontSize: '30px' ,marginLeft:'-400px'}} />
                              </IconButton>
                               <input type="file" id="upload" onChange={uploadfile1} style={{display:'none'}}/>
                           </div>
                        <br />
                        <input type="submit" className="btn1" onClick={postsubmit}   value="POST" />
                    </div>
                </div>
            </Modal>
            <div className="Post">
                <div className="upper_section">
                    <Avatar src='data:image/jpeg;base64,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' />
                    <form>
                        <input type="text" placeholder="What On Your MindDear" onClick={handleopen} />
                    </form>
                    <p style={{ color: 'gray', fontSize: '13px', fontWeight: 'bolder', fontStyle: 'italic' }}>{user.displayName}</p>
                </div>
                <div className="below_section">
                    <VideoCallIcon style={{ color: 'red', cursor: 'pointer' }} />
                    <h4>Live Video</h4>
                    <AddPhotoAlternateIcon style={{ color: '	#90ee90', cursor: 'pointer' }} onClick={postdata} />
                    <h4>Photo/Video</h4>
                    <EmojiEmotionsIcon style={{ color: '#ffd700', cursor: 'pointer' }} />
                    <button className="btn" type="submit" name="submit">POST</button>
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
            <Chat1/>     
        </>
    )
}
export default Post;
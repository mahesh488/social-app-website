import React from 'react'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import './css/comment.css';
const Comment = () => {
    return (
        <div className="Comment">
         <div className="comment_section">
         <ThumbUpAltIcon style={{marginLeft:'30px'}}/>
         <p>Like</p>
         <ChatBubbleOutlineIcon style={{marginLeft:'160px',color:'gray'}}/>
         <p>Comment</p>
         <ShareIcon style={{marginLeft:'160px'}}/>
        <p>ShareIcon</p>
         </div>
        </div>
    )
}

export default Comment

import { Avatar,Modal } from '@material-ui/core'
import React from 'react'
import "./css/sidebarrow.css";


const Sidebaroptions = ({ src, title, icon, }) => {
    return (
        <div className="Sidebarrow" >
            {src && <Avatar src={src} />}
            {title}
            {icon && <icon />}
        
        </div>
    )
}

export default Sidebaroptions

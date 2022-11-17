import React, { useState, useEffect } from 'react'
import "./css/header.css";
import { useHistory, Route } from "react-router-dom";
import { Avatar, IconButton, Modal } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import GroupIcon from '@material-ui/icons/Group';
import GamesIcon from '@material-ui/icons/Games';
import AppsIcon from '@material-ui/icons/Apps';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import CloseIcon from '@material-ui/icons/Close';
import FeedbackIcon from '@material-ui/icons/Feedback';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import SendIcon from '@material-ui/icons/Send';
import VideocamIcon from '@material-ui/icons/Videocam';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import AddIcon from '@material-ui/icons/Add';
import CollectionsIcon from '@material-ui/icons/Collections';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useStatevalue } from './StateProvider';
import { db } from './firebase';
import firebase from 'firebase';
import Chat from './Chat';

const Header = () => {
    const history = useHistory();
    const [notification, setNotification] = useState(false);
    const [{ user }, dispatch] = useStatevalue();
    const [message, setMessage] = useState(false);
    const [menu, setMenu] = useState(false);
    const [mess, setMess] = useState(false);
    const [chat, setChat] = useState([]);
    const [show, showData] = useState();
    const [merge, setMerge] = useState([]);
    const [emoji, setEmoji] = useState(false);
    const handlechange = () => {
        setMessage(true)
    }
    const data = () => {
        setMessage(true)
    }
    const datahandle = () => {
        setMessage(false)
    }
    const setnoti = () => {
        setNotification(true);
    }
    const setnoti1 = () => {
        setNotification(false);
    }
    const menuoptions = () => {
        setMenu(true);
    }
    const menuoptions1 = () => {
        setMenu(false);
    }
    const datachange = () => {
        setMess(true);
    }
    const dataClose = () => {
        setMess(false);
    }
    const dataClose1 = () => {
        setMess(false);
    }
    const setGroup = () => {
        setEmoji(true);
    }
    const emojiChanger = () => {
        setEmoji(false);
    }
    const chatData = (e) => {
        e.preventDefault();
        db.collection('Chat1').add({
            message: chat,
            name: user.displayName,
        })

    }
    useEffect(() => {
        db.collection('Chat1').onSnapshot(snapshot => {
            setMerge(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    
    }, [])


    return (
        <>
            <div className="data">
                {
                    chat.map(msg => {
                        return <Chat key={msg.id} id={msg.id} message={msg.data.message} />
                    })
                }

            </div>

            <div className="header">
                <div className="header__left">
                    <Avatar src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' />
                    <SearchIcon style={{ margin: '10px 0px' }} />
                    <form>
                        <input type="text" placeholder="Search Facebook" />
                    </form>
                </div>
                <div className="header__middle">
                    <div className="header__option">
                        <div className="header__option_active">     <IconButton> <HomeIcon style={{ color: '#2381fa' }} /></IconButton>
                        </div>
                    </div>
                    <div className="header__option">
                        <IconButton>
                            <OndemandVideoIcon />
                        </IconButton>
                    </div>
                    <div className="header__option">
                        <IconButton>
                            <GroupIcon onClick={setGroup} />
                        </IconButton>
                    </div>
                    <div className="header__option">
                        <IconButton>
                            <GamesIcon />
                        </IconButton>
                    </div>

                </div>
                <div className="message_sender">
                    <SendIcon onClick={datachange} />
                </div>

                <div className="header__right">
                    <div className="user__info">
                        <Avatar src="https://i.pinimg.com/736x/d8/bd/d9/d8bdd9632becd0fe3ad025cabb91ba93.jpg" />
                        <p>{user.displayName}</p>
                    </div>
                    <div className="app__notification">
                        <IconButton onClick={menuoptions} >
                            <AppsIcon style={{ margin: '35px -45px' }} />
                        </IconButton>
                        <IconButton>
                            <NotificationsIcon onClick={setnoti} style={{ margin: '35px 25px' }} />
                        </IconButton>
                        <IconButton onClick={data}>
                            <ArrowDropDownCircleIcon style={{ margin: '35px 25px', cursor: 'pointer' }} />
                        </IconButton>
                    </div>

                </div>
            </div>
            <Modal open={emoji} onClose={emojiChanger}>
                <div className="emoji_data">
                    <div className="emoji_top">
                        <div className='emoji_left'>
                            <h1>People you may know</h1>
                        </div>
                        <div className="emoji_right">
                            <h1>See all</h1>
                        </div>
                    </div>
                    <div className="emoji_middle">
                        <div className="sector1">
                 
                        </div>
                        <a href="data.html" className='data101'>Android  community</a>
                 x       
                        <div className="sector2">

                        </div>
                        <a href="data.html" className='data101'>Manipal university</a>
               
                        <div className="sector3">

                        </div>
                        <a href="data.html" className='data101'>Manipal university</a>
               
                        <div className="sector4">

                        </div>
                        <a href="data.html" className='data101'>Hiring php</a>
                            
                    </div>
                    
                </div>
                
            </Modal>
            <Modal open={message} onClose={handlechange}>
                <div className="model1">
                    <div className="model_header1">
                        <Avatar />
                        <h3 style={{ paddingLeft: "5px" }}>{user.displayName}</h3>
                        <CloseIcon onClick={datahandle} style={{ marginLeft: "300px", cursor: 'pointer ' }} />
                    </div>
                    <div className="model_middle_header1">
                        <FeedbackIcon />
                        <h3>Give feedback</h3>
                        <br />
                        <p>Help us improve the new feedback</p>
                    </div>
                    <div className="model_middle_bottom1">
                        <SettingsIcon />
                        <h3 style={{ marginLeft: '20px' }}>Settings&Privacy</h3>
                        <ArrowForwardIosIcon style={{ marginLeft: '290px' }} />
                    </div>
                    <div className="model_middle_bottom2">
                        <HelpIcon />
                        <h3 style={{ marginLeft: '20px' }}>Help&Support</h3>
                        <ArrowForwardIosIcon style={{ marginLeft: '310px' }} />
                    </div>
                    <div className="model_middle_bottom3">
                        <HelpIcon style={{ color: 'black' }} />
                        <h3 style={{ marginLeft: '20px' }}>Display&accessability</h3>
                        <ArrowForwardIosIcon style={{ marginLeft: '255px', color: 'black' }} />
                    </div>
                    <div className="model_middle_bottom4">
                        <SettingsIcon onClick={firebase.auth().signOut()} />
                        <h3 style={{ marginLeft: '20px', cursor: 'pointer' }}>Logout</h3>
                    </div>
                         
                </div>
            </Modal>
            <Modal open={notification} onClose={setnoti1}>
                <div className="notifiction">
                    <div className="notifiction_header">
                        <h1>Notification</h1>
                        <MoreHorizIcon style={{ marginLeft: "300px", color: "gray", fontSize: '40px' }} />
                    </div>
                    <div className="notifition_middle">
                        <h1>Earlier</h1>
                        <h3 style={{ marginLeft: '340px', color: 'red' }}>See all</h3>
                    </div>

                    <div className="notification_middle1">
                        <Avatar src='https://scontent-bom1-2.xx.fbcdn.net/v/t1.6435-9/p960x960/194870948_918831602300160_3673435238920643010_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=8wp0ggsjPD8AX8RRTxt&_nc_ht=scontent-bom1-2.xx&oh=00_AT9mmU3XY2FWbYHkoHjDmPATvCD6eDDu0MyRcWlG257fbQ&oe=61E3F40D' />
                        <p>Mahesh pradhan accepted your <br />friend request<br />a day ago</p>

                    </div>
                    <div className="notification_middle1">
                        <Avatar src='https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-1/p200x200/240601595_103645715394207_4286279887347544493_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Wg-v98Kuq0cAX9e9JhH&_nc_ht=scontent-bom1-2.xx&oh=00_AT-LnzS8crVNJ45qC0GZQUb1c6bf-Zitn3Uuf2ODV96J-Q&oe=61C2E83E' />
                        <p>Sunil sharma accepted your <br />friend request<br />3 day ago</p>

                    </div>
                    <div className='notification_middle1'>
                        <Avatar src='https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-1/c0.7.200.200a/p200x200/214352020_107394438279430_8108698298103579971_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=UNjpmbsb84sAX-CZ-Nx&_nc_ht=scontent-bom1-1.xx&oh=00_AT_1XuF9GUhk7XkG2FijzSVNhEs0ZqALVtwEYojGKqYDHw&oe=61C377CB' />
                        <p>Mahender bagra bagra accept friend request<br />4 day ago</p>
                    </div>
                </div>
            </Modal>
            <Modal open={menu} onClose={menuoptions1}>
                <div className="menus">
                    <div className="menu-left">
                        <h3>Menus</h3>
                        <div className="menu_middle">
                            <SearchIcon style={{ marginBottom: '2px', color: "Gray" }} />
                            <input type="text" placeholder="Search menu" />
                        </div>
                        <h1>Social</h1>
                        <div className="menu_bottom">
                            <EventSeatIcon style={{ fontSize: '40px', color: '#1778f2' }} />
                            <h3 style={{ marginBottom: '30px', marginLeft: '25px' }}>Events</h3>
                            <p>Organize and find events and other things to do online and nearby</p>
                        </div>
                        <div className="menu_bottom">
                            <GroupIcon style={{ fontSize: '40px', color: '#1778f2' }} />
                            <h3 style={{ marginBottom: '30px', marginLeft: '25px' }}>Find Friends</h3>
                            <p>Search for friends and people you may know</p>
                        </div>
                        <div className="menu_bottom">
                            <GroupIcon style={{ fontSize: '40px', color: '#1778f2' }} />
                            <h3 style={{ marginBottom: '30px', marginLeft: '25px' }}>Groups</h3>
                            <p>Organize and find events and other things to do online and nearby</p>
                        </div>
                        <div className="menu_bottom">
                            <GroupIcon style={{ fontSize: '40px', color: '#1778f2' }} />
                            <h3 style={{ marginBottom: '30px', marginLeft: '25px' }}>News feed</h3>
                            <p>Organize and find events and other things to do online and nearby</p>
                        </div>
                        <div className="menu_bottom">
                            <SearchIcon style={{ fontSize: '40px', color: '#1778f2' }} />
                            <h3 style={{ marginBottom: '30px', marginLeft: '25px' }}>Pages</h3>
                            <p>Organize and find events and other things to do online and nearby</p>
                        </div>
                        <h1>Entertrainment</h1>
                    </div>
                    <div className="menu_middle">
                        <div className="menu_middle1">
                            <Avatar src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEUCXu3///8ATuD7//////0AUOHK4Pje7Pf///wAWPEAX+oAY+kBYPFZjNMHW+8AYuy31/UAV+gAYuIBXvfq+P/i8fcybuT2//7///XI5v8AWdpynOoAXeT5//pundwEXe9di+F/qPMAYfX//+/b8vpRiNlVjtCn0uav1vI5gd8ATcMAVuIDWvsAV94yb9gzbt0QZNe36v7k//8AXcrO7flSjskAW9X/9fcTZMnH9PxdmexvnOKZtNgAUvEAS+5bgNP//+ZroNh5rOtwO6IYAAADd0lEQVR4nO3cD3PTNhiAcQkZasuq3NiAPZZU4NAOVpcxYMu27h/9/h8KebnuOOjRiCRSXZ6nd+31mlzyS94k8p1cIYiIiIiIiIiIiIiIiIiI6Fvq/r1bm9sN8OjRwS3t+UmhhanstsIHUmaZvI2pw6LSptyNMFOpOdeEECHC9CFEiDB9CBEiTB9ChAjThxAhwvQhRIgwfQgRIkwfQoQI04cQIcL0IUSI8JpbHC+06BYqTrI9LHrt3LZ7v0KFKo9WezrrS1dsCQwR5vkGF9ph6vTMlKKJKcyUyvy3NtKYtl5Y60bHE/pHdbHs2u2emJBOrat1X8UUtt3y4Q8vjiL14mXR1NpFFPr5zLMHP85idVYPXmgjTmmuZCe/Oy/rUhvbOL33hBWVMBGfw7wdhU/8R5TQVbXtQ3tzzuq5MAmEtrFOl6Vp9p7/tDdGxJzStbD2Uypsoeu9p/2Duf2ohAvLUuv541c/Pd57tRt6rSOu2q6mdBjE65/fPNx7bw7Phr7c0V79EOHcL6Tevsu7bN/rUvXLfHB1zGOLq9ehfxn+epDl4/Lff/13GHB1OKA+/1Ve/bjmb1/8VfqVtxFVAuHciFG4/yPK+MeH/0/pKMwRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRItxEaO66sK4rL5Thu7hWq5WU3eYb/pMJy6oXb991XejW+0W2yldqCsJiGPRvv4dv2VdtvpQhs51MKIQuX/9x8X1wF38u1GI5AWE9bhIu/prNA7N//9Oq5b8TmFLX9MaY3obWFCd+tAP+7XS6KbXW6XkdsIV+vVfb6MNWZgHnTsUXZmvh+jwEvfkW875wti+FdidK5t3m7zUJzrBUqhvPmQkdz1lxbpvaavdULWTAu2mKc0jbPD84vjgO7P3741fFfDBTEKpFl7XBy7W2bS8LXVSTEKquy+TNy5dPFjO59EJTT0GYqSzvgsuluiyEmIRwPIt04zv48X29nNmmvP1CtRaGDqm/SnZ5botJvJd+XZ717IlwCBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIjw2xbqOy8Uri8j/ndPhDcLszsvvPvPYSqhB+7RN+6k+sopPd2N8OhRhJ7NR+HLsCs9P9mJUNy/F6HZ+rYCr7W1jYiIiIiIiIiIiIiIiIiIptQH4e9mUYO1UvUAAAAASUVORK5CYII=' />
                            <h3>Gaming Video</h3>
                        </div>
                    </div>
                    <div className="menu_middle">
                        <div className="menu_middle1">
                            <Avatar src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEUCXu3///8ATuD7//////0AUOHK4Pje7Pf///wAWPEAX+oAY+kBYPFZjNMHW+8AYuy31/UAV+gAYuIBXvfq+P/i8fcybuT2//7///XI5v8AWdpynOoAXeT5//pundwEXe9di+F/qPMAYfX//+/b8vpRiNlVjtCn0uav1vI5gd8ATcMAVuIDWvsAV94yb9gzbt0QZNe36v7k//8AXcrO7flSjskAW9X/9fcTZMnH9PxdmexvnOKZtNgAUvEAS+5bgNP//+ZroNh5rOtwO6IYAAADd0lEQVR4nO3cD3PTNhiAcQkZasuq3NiAPZZU4NAOVpcxYMu27h/9/h8KebnuOOjRiCRSXZ6nd+31mlzyS94k8p1cIYiIiIiIiIiIiIiIiIiI6Fvq/r1bm9sN8OjRwS3t+UmhhanstsIHUmaZvI2pw6LSptyNMFOpOdeEECHC9CFEiDB9CBEiTB9ChAjThxAhwvQhRIgwfQgRIkwfQoQI04cQIcL0IUSI8JpbHC+06BYqTrI9LHrt3LZ7v0KFKo9WezrrS1dsCQwR5vkGF9ph6vTMlKKJKcyUyvy3NtKYtl5Y60bHE/pHdbHs2u2emJBOrat1X8UUtt3y4Q8vjiL14mXR1NpFFPr5zLMHP85idVYPXmgjTmmuZCe/Oy/rUhvbOL33hBWVMBGfw7wdhU/8R5TQVbXtQ3tzzuq5MAmEtrFOl6Vp9p7/tDdGxJzStbD2Uypsoeu9p/2Duf2ohAvLUuv541c/Pd57tRt6rSOu2q6mdBjE65/fPNx7bw7Phr7c0V79EOHcL6Tevsu7bN/rUvXLfHB1zGOLq9ehfxn+epDl4/Lff/13GHB1OKA+/1Ve/bjmb1/8VfqVtxFVAuHciFG4/yPK+MeH/0/pKMwRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRItxEaO66sK4rL5Thu7hWq5WU3eYb/pMJy6oXb991XejW+0W2yldqCsJiGPRvv4dv2VdtvpQhs51MKIQuX/9x8X1wF38u1GI5AWE9bhIu/prNA7N//9Oq5b8TmFLX9MaY3obWFCd+tAP+7XS6KbXW6XkdsIV+vVfb6MNWZgHnTsUXZmvh+jwEvfkW875wti+FdidK5t3m7zUJzrBUqhvPmQkdz1lxbpvaavdULWTAu2mKc0jbPD84vjgO7P3741fFfDBTEKpFl7XBy7W2bS8LXVSTEKquy+TNy5dPFjO59EJTT0GYqSzvgsuluiyEmIRwPIt04zv48X29nNmmvP1CtRaGDqm/SnZ5botJvJd+XZ717IlwCBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIjw2xbqOy8Uri8j/ndPhDcLszsvvPvPYSqhB+7RN+6k+sopPd2N8OhRhJ7NR+HLsCs9P9mJUNy/F6HZ+rYCr7W1jYiIiIiIiIiIiIiIiIiIptQH4e9mUYO1UvUAAAAASUVORK5CYII=' />
                            <h3>Gaming Video</h3>
                        </div>
                    </div>

                    <div className="menu_middle">
                        <div className="menu_middle1">
                            <Avatar src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEUCXu3///8ATuD7//////0AUOHK4Pje7Pf///wAWPEAX+oAY+kBYPFZjNMHW+8AYuy31/UAV+gAYuIBXvfq+P/i8fcybuT2//7///XI5v8AWdpynOoAXeT5//pundwEXe9di+F/qPMAYfX//+/b8vpRiNlVjtCn0uav1vI5gd8ATcMAVuIDWvsAV94yb9gzbt0QZNe36v7k//8AXcrO7flSjskAW9X/9fcTZMnH9PxdmexvnOKZtNgAUvEAS+5bgNP//+ZroNh5rOtwO6IYAAADd0lEQVR4nO3cD3PTNhiAcQkZasuq3NiAPZZU4NAOVpcxYMu27h/9/h8KebnuOOjRiCRSXZ6nd+31mlzyS94k8p1cIYiIiIiIiIiIiIiIiIiI6Fvq/r1bm9sN8OjRwS3t+UmhhanstsIHUmaZvI2pw6LSptyNMFOpOdeEECHC9CFEiDB9CBEiTB9ChAjThxAhwvQhRIgwfQgRIkwfQoQI04cQIcL0IUSI8JpbHC+06BYqTrI9LHrt3LZ7v0KFKo9WezrrS1dsCQwR5vkGF9ph6vTMlKKJKcyUyvy3NtKYtl5Y60bHE/pHdbHs2u2emJBOrat1X8UUtt3y4Q8vjiL14mXR1NpFFPr5zLMHP85idVYPXmgjTmmuZCe/Oy/rUhvbOL33hBWVMBGfw7wdhU/8R5TQVbXtQ3tzzuq5MAmEtrFOl6Vp9p7/tDdGxJzStbD2Uypsoeu9p/2Duf2ohAvLUuv541c/Pd57tRt6rSOu2q6mdBjE65/fPNx7bw7Phr7c0V79EOHcL6Tevsu7bN/rUvXLfHB1zGOLq9ehfxn+epDl4/Lff/13GHB1OKA+/1Ve/bjmb1/8VfqVtxFVAuHciFG4/yPK+MeH/0/pKMwRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRItxEaO66sK4rL5Thu7hWq5WU3eYb/pMJy6oXb991XejW+0W2yldqCsJiGPRvv4dv2VdtvpQhs51MKIQuX/9x8X1wF38u1GI5AWE9bhIu/prNA7N//9Oq5b8TmFLX9MaY3obWFCd+tAP+7XS6KbXW6XkdsIV+vVfb6MNWZgHnTsUXZmvh+jwEvfkW875wti+FdidK5t3m7zUJzrBUqhvPmQkdz1lxbpvaavdULWTAu2mKc0jbPD84vjgO7P3741fFfDBTEKpFl7XBy7W2bS8LXVSTEKquy+TNy5dPFjO59EJTT0GYqSzvgsuluiyEmIRwPIt04zv48X29nNmmvP1CtRaGDqm/SnZ5botJvJd+XZ717IlwCBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIjw2xbqOy8Uri8j/ndPhDcLszsvvPvPYSqhB+7RN+6k+sopPd2N8OhRhJ7NR+HLsCs9P9mJUNy/F6HZ+rYCr7W1jYiIiIiIiIiIiIiIiIiIptQH4e9mUYO1UvUAAAAASUVORK5CYII=' />
                            <h3>Gaming Video</h3>
                        </div>
                    </div>

                    <div className="menu_middle">
                        <div className="menu_middle1">
                            <Avatar src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEUCXu3///8ATuD7//////0AUOHK4Pje7Pf///wAWPEAX+oAY+kBYPFZjNMHW+8AYuy31/UAV+gAYuIBXvfq+P/i8fcybuT2//7///XI5v8AWdpynOoAXeT5//pundwEXe9di+F/qPMAYfX//+/b8vpRiNlVjtCn0uav1vI5gd8ATcMAVuIDWvsAV94yb9gzbt0QZNe36v7k//8AXcrO7flSjskAW9X/9fcTZMnH9PxdmexvnOKZtNgAUvEAS+5bgNP//+ZroNh5rOtwO6IYAAADd0lEQVR4nO3cD3PTNhiAcQkZasuq3NiAPZZU4NAOVpcxYMu27h/9/h8KebnuOOjRiCRSXZ6nd+31mlzyS94k8p1cIYiIiIiIiIiIiIiIiIiI6Fvq/r1bm9sN8OjRwS3t+UmhhanstsIHUmaZvI2pw6LSptyNMFOpOdeEECHC9CFEiDB9CBEiTB9ChAjThxAhwvQhRIgwfQgRIkwfQoQI04cQIcL0IUSI8JpbHC+06BYqTrI9LHrt3LZ7v0KFKo9WezrrS1dsCQwR5vkGF9ph6vTMlKKJKcyUyvy3NtKYtl5Y60bHE/pHdbHs2u2emJBOrat1X8UUtt3y4Q8vjiL14mXR1NpFFPr5zLMHP85idVYPXmgjTmmuZCe/Oy/rUhvbOL33hBWVMBGfw7wdhU/8R5TQVbXtQ3tzzuq5MAmEtrFOl6Vp9p7/tDdGxJzStbD2Uypsoeu9p/2Duf2ohAvLUuv541c/Pd57tRt6rSOu2q6mdBjE65/fPNx7bw7Phr7c0V79EOHcL6Tevsu7bN/rUvXLfHB1zGOLq9ehfxn+epDl4/Lff/13GHB1OKA+/1Ve/bjmb1/8VfqVtxFVAuHciFG4/yPK+MeH/0/pKMwRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRItxEaO66sK4rL5Thu7hWq5WU3eYb/pMJy6oXb991XejW+0W2yldqCsJiGPRvv4dv2VdtvpQhs51MKIQuX/9x8X1wF38u1GI5AWE9bhIu/prNA7N//9Oq5b8TmFLX9MaY3obWFCd+tAP+7XS6KbXW6XkdsIV+vVfb6MNWZgHnTsUXZmvh+jwEvfkW875wti+FdidK5t3m7zUJzrBUqhvPmQkdz1lxbpvaavdULWTAu2mKc0jbPD84vjgO7P3741fFfDBTEKpFl7XBy7W2bS8LXVSTEKquy+TNy5dPFjO59EJTT0GYqSzvgsuluiyEmIRwPIt04zv48X29nNmmvP1CtRaGDqm/SnZ5botJvJd+XZ717IlwCBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIjw2xbqOy8Uri8j/ndPhDcLszsvvPvPYSqhB+7RN+6k+sopPd2N8OhRhJ7NR+HLsCs9P9mJUNy/F6HZ+rYCr7W1jYiIiIiIiIiIiIiIiIiIptQH4e9mUYO1UvUAAAAASUVORK5CYII=' />
                            <h3>Gaming Video</h3>
                        </div>
                    </div>


                    <div className="menu_right">
                        <h1>Create</h1>
                        <div className="menu_rightheader">
                            <IconButton>
                                <PostAddOutlinedIcon style={{ fontSize: '40px', backgroundColor: 'lightGray', borderRadius: '8px' }} />
                            </IconButton>
                            <h3>Post</h3>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal open={mess} onClose={dataClose}>
                <div className="message_model">
                    <div className="model_left_top11">
                        <Avatar />
                        <p>{user.displayName}</p>
                        <div className="model_right_top12">
                            <IconButton>
                                <VideocamIcon style={{ color: '#2381fa', fontSize: '30px' }} />
                            </IconButton>
                            <IconButton>
                                <LocalPhoneIcon style={{ color: '#2381fa', fontSize: '30px' }} />
                            </IconButton>
                            <IconButton onClick={dataClose1}>
                                <CloseIcon style={{ color: '#2381fa', fontSize: '30px' }} />
                            </IconButton>
                        </div>
                    </div>
                    <div className="model_chat_middle1">
                        <Avatar />
                        <p>{user.displayName}</p>
                    </div>
                    <div className="model_chat_middle2">
                        <p>
                            Facebook</p>
                        <p>
                            You are friends on Facebook
                        </p>
                        <p>
                            New Facebook account
                        </p>
                    </div>

                    <div className="chat_box">

                        <div className="chat_left">
                        {
                             merge.map(merg=>{
                                 <div className="rightsidebar_top1">
                                     <p>{merg.data.name}</p>
                                 </div>
                             })
                         }
                  
                            <p></p>
                            <p>Hii mahesh</p>
                        </div>
                        <div className="chat_right">
                        </div>

                    </div>

                    <div className="chat_bottom_left">
                        <IconButton>
                            <AddIcon style={{ color: '#2381fa' }} />
                        </IconButton>
                        <IconButton>
                            <CollectionsIcon style={{ color: '#2381fa' }} />
                        </IconButton>
                        <IconButton>
                            <GifIcon style={{ color: '#2381fa' }} />
                        </IconButton>
                        <input type="text" className="input1" placeholder="Aa" />
                        <IconButton>
                            <EmojiEmotionsIcon style={{ color: '#2381fa' }} />
                        </IconButton>
                        <IconButton>
                            <ThumbUpIcon style={{ color: '#2381fa' }} />
                        </IconButton>
                        <IconButton>
                            <SendIcon style={{ marginLeft: '350px', marginTop: '-65px' }} onClick={chatData} />
                        </IconButton>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Header

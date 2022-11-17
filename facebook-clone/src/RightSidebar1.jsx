import recct,{useEffect,useState} from 'react';
import "./css/rightsidebar1.css";
import {db} from './firebase';
import { Link,BrowserRouter as Router,Route } from 'react-router-dom';
const RightSidebar1=({id,name})=>{
  const[data1,setData]=useState([]);
  useEffect(() => {
    db.collection('room2').onSnapshot(snapshot => {
        setData(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))
    })

}, [])

  return(
       <Router>
       <div className='Rightsidebar1'>
        <div className="heading">
            <h1 style={{marginLeft:'60px'}}>Room chat </h1>
        </div>
         {
             data1.map(dat=>{
                return(
                    <div className="rightsidebar_top" key={dat.id}>
                    <h1></h1>
                    <Route>
                    <Link to={'/chat1/'+dat.id} className="color2">{dat.data.name}</Link></Route>
                    </div>
                 
                )
               })
         }
        </div>
        </Router>
 )
}
export default RightSidebar1;
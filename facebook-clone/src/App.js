import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Post from './Post';
import Post1 from './Post1';
import Comment from './Comment';
import Storypost from './Storypost';
import Rightsidebar from './Rightsidebar';
import Login from './Login';
import { useStatevalue } from './StateProvider';
import Storypost1 from './Storypost1';
function App() {
  const[{user},dispatch]=useStatevalue();
  return (
     <>
     {!user?(<Login/>):(
          <div className="App">
          <header className="App-header">
           <Header/>
           <Rightsidebar/>
           <Sidebar/>
           <div className="app__body">
           <Feed/>
           <Post/>
           <Post1/>
           <Comment/>
           <Storypost/>
           <Storypost1/>
           </div>
          </header>
        </div>
       
     )}
    </>
  );
}

export default App;

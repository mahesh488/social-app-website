import { Avatar } from '@material-ui/core';
import React from 'react'
import './css/login.css';
import { auth, provider } from './firebase';
import { useStatevalue } from './StateProvider';
const Login = () => {
    const[{},dispatch]=useStatevalue();
    const Signin = () => {
        auth.signInWithPopup(provider).then(result => {
        var credential=result.credential;
        console.log(credential);
        dispatch({
            type:'SET_USER',
            user:{
                displayName:result.user.displayName
            }
        })
        }).catch(error => console.log(error))
    }
    return (
        <div className="login_wrapper">
            <div className="login">
                <Avatar src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' style={{ marginLeft: '100px', cursor: 'pointer' }} />
                <h4>Sign in With Facebook</h4>
                <button onClick={Signin}>Sign With Facebook</button>
            </div>
        </div>
    )
}

export default Login

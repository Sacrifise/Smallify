import React from 'react'
import "./profileAuth.css"
import { useSelector, useDispatch } from 'react-redux';
import { checkObj } from '../store/slices/authorizationSlice';

export default function ProfileAuth() {
    const dispatch = useDispatch();
    
    if (useSelector((state) => state.autorizationUserStore.isAutorized)){
        return("")
    }
    else
        return (
            <div className='auth'>
                <div className='auth-cont'>
                    <form className='auth-cont-form' onSubmit={(e) => {e.preventDefault(); dispatch(checkObj({login: e.target.user_login.value, password: e.target.user_passw.value}))}}>
                            <p>Login Modal</p>
                            <label>Login</label>
                            <input name="user_login" placeholder='type your login'></input>
                            <label>Password</label>
                            <input name="user_passw" type="password" placeholder='type your password'></input>
                            <button type='sublit'>Log in</button>
                    </form>
                </div>
            </div>
        )
}

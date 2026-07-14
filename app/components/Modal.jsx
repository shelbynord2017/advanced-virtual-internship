"use client"
import guest from "../../assets/guest-icon.png"
import close from "../../assets/close.png"
import google from "../../assets/google.png"
import { useEffect, useState, createContext, useContext } from 'react'
import { auth } from "../firebase"
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
 } from 'firebase/auth';


export default function Modal() {


  return (
    <body>
        <div id="__next">
            <div className="wrapper wrapper__full">
                <div className='sidebar__overlay'>
                    <div className="auth__wrapper">
                        <div className="auth">
                            <div className='auth__content'>
                                <div className='auth__title'>
                                    Log in to Summarist
                                </div>
                                <button 
                                // onClick={login}
                                className='btn guest__btn--wrapper'>
                                    <figure className='google__icon--mask guest__icon--mask'>
                                        <img src={guest.src} alt="" />
                                    </figure>
                                    <div>Login as a Guest</div>
                                </button>
                                <div className="auth__separator">
                                    <span className="auth__separator--text">or</span>
                                </div>
                                <button 
                                // onClick={register}
                                className="btn google__btn--wrapper">
                                    <figure className="google__icon--mask">
                                        <img src={google.src} alt="" />
                                    </figure>
                                    <div>Register</div>
                                </button>
                                <div className="auth__separator">
                                    <span className="auth__separator--text">or</span>
                                </div>
                                <form className="auth__main--form">
                                    <input className="auth__main--input" type="text" placeholder="Email Address"/>
                                    <input className="auth__main--input" type="password" placeholder="Password"/>
                                    <button 
                                    // onClick={login}
                                    className="btn">
                                        <span>Login</span>
                                    </button>
                                </form>
                                <div className="auth__close--btn">
                                    <img src={close.src} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
  )
}



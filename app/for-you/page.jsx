"use client"
import logo from '../../assets/logo.png'
import { FaHome, FaRegBookmark, FaPenAlt, FaSearch,  } from "react-icons/fa";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { useAuth } from "../components/AuthContextProvider"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function forYou() {
  
    const { logout } = useAuth();
    const router = useRouter();
    const [error, setError] = useState('');

    const handleLogout = async () => {
        console.log("logout clicked")
        try {
        console.log("before logout")
        await logout();
        console.log("after logout")
        router.push("/");
        } catch (err) {
        setError("invalid email or password");
        }
    };
  
  return (
    <body>
        <div className="wrapper">
            <div className="search__background">
                <div className="search__wrapper">
                    <div className="search__content">
                        <div className="search">
                            <div className="search__input--wrapper">
                                <input 
                                    className='search__input'
                                    placeholder='Search for books'
                                    type="text" 
                                />
                                <div className="search__icon">
                                    <FaSearch  className="sidebar__icon--img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar__overlay sidebar__overlay--hidden"></div>
            <div className="sidebar sidebar__closed">
                <div className="sidebar__logo">
                    <img src={logo.src} alt="" />
                </div>
                <div className="sidebar__wrapper">
                    <div className="sidebar__top">
                        <a className="sidebar__link--wrapper">
                            <div className="sidebar__icon--wrapper">
                                <FaHome className="sidebar__icon--img" />
                            </div>
                            <div className="sidebar__link--text">For you</div>
                        </a>
                        <a className="sidebar__link--wrapper">
                            <div className="sidebar__icon--wrapper">
                                <FaRegBookmark className="sidebar__icon--img" />
                            </div>
                            <div className="sidebar__link--text">My library</div>
                        </a>
                        <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                            <div className="sidebar__icon--wrapper">
                                <FaPenAlt className="sidebar__icon--img" />
                            </div>
                            <div className="sidebar__link--text">Highlights</div>
                        </div>
                        <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                            <div className="sidebar__icon--wrapper">
                                <FaSearch  className="sidebar__icon--img" />
                            </div>
                            <div className="sidebar__link--text">Search</div>
                        </div>
                    </div>
                    <div className="sidebar__bottom">
                        <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                            <div className="sidebar__icon--wrapper">
                                <IoSettingsOutline className="sidebar__icon--img" />
                            </div>
                            <div className="sidebar__link--text">Settings</div>
                        </div>
                        <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                            <div className="sidebar__icon--wrapper">
                                <IoMdHelpCircle className="sidebar__icon--img" />
                            </div>
                            <div className="sidebar__link--text">Help & Support</div>
                        </div>
                        <a 
                        onClick={handleLogout}
                        className="sidebar__link--wrapper">
                            <div className="sidebar__icon--wrapper">
                                <IoLogOutOutline className="sidebar__icon--img" />
                            </div>
                            <div 
                            
                            className="sidebar__link--text">Logout</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="container">
                    <div className="for-you__wrapper">
                        <div className="for-you__title">
                            Selected just for you
                        </div>
                        <audio src=""></audio>
                        <a 
                            href=""
                            className='selected__book'>
                            <div className="selected__book--sub-title">
                                How Constant Innovation Creates Radically Successful Businesses
                            </div>
                            <div className="selected__book--line"></div>
                            <div className="selected__book--content">
                                <figure className='book__image--wrapper'>
                                    <img className="book__image" src="" alt="" />
                                </figure>
                                <div className="selected__book--text">
                                    <div className="selected__book--title">The Lean Startup</div>
                                    <div className="selected__book--author">Eric Ries</div>
                                    <div className="selected__book--duration-wrapper">
                                        <div className="selected__book--icon">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="selected__book--duration">3 mins 23 secs</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div>
                            <div className="for-you__title">
                                Recommended For You
                            </div>
                            <div className="for-you__sub-title">
                                We think you'll like these
                            </div>
                            <div className="for-you__recommended--books">
                                <a className="for-you__recommended--books-link" href="">
                                    <audio src=""></audio>
                                    <figure className='book__image--wrapper'>
                                        <img className="book__image" src="" alt="" />
                                    </figure>
                                    <div className="recommended__book--title">
                                        How to Win Friends and Influence People in the Digital Age
                                    </div>
                                    <div className="recommended__book--author">
                                        Dale Carnegie
                                    </div>
                                    <div className="recommended__book--sub-title">
                                        Time-tested advice for the digital age
                                    </div>
                                    <div className="recommended__book--details-wrapper">
                                        <div className="recommended__book--details">
                                            <div className="recommended__book--details-icon">
                                                <img src="" alt="" />
                                            </div>
                                            <div className="recommended__book--details-text">
                                                03:24
                                            </div>
                                        </div>
                                        <div className="recommended__book--details">
                                            <div className="recommended__book--details-icon">
                                                <img src="" alt="" />
                                            </div>
                                            <div className="recommended__book--details-text">
                                                4.4
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a className="for-you__recommended--books-link" href="">
                                    <audio src=""></audio>
                                    <figure className='book__image--wrapper'>
                                        <img className="book__image" src="" alt="" />
                                    </figure>
                                    <div className="recommended__book--title">
                                        How to Win Friends and Influence People in the Digital Age
                                    </div>
                                    <div className="recommended__book--author">
                                        Dale Carnegie
                                    </div>
                                    <div className="recommended__book--sub-title">
                                        Time-tested advice for the digital age
                                    </div>
                                    <div className="recommended__book--details-wrapper">
                                        <div className="recommended__book--details">
                                            <div className="recommended__book--details-icon">
                                                <img src="" alt="" />
                                            </div>
                                            <div className="recommended__book--details-text">
                                                03:24
                                            </div>
                                        </div>
                                        <div className="recommended__book--details">
                                            <div className="recommended__book--details-icon">
                                                <img src="" alt="" />
                                            </div>
                                            <div className="recommended__book--details-text">
                                                4.4
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="for-you__title">
                                Suggested Books
                            </div>
                            <div className="for-you__sub-title">
                                Browse those books
                            </div>
                            <div className="for-you__recommended--books">
                                <a className="for-you__recommended--books-link" href="">
                                    <div className="book__pill book__pill--subscription-require">Premium</div>
                                    <audio src=""></audio>
                                    <figure className='book__image--wrapper'>
                                        <img className="book__image" src="" alt="" />
                                    </figure>
                                    <div className="recommended__book--title">
                                        Zero to One
                                    </div>
                                    <div className="recommended__book--author">
                                        Peter Thiel with Blake Masters
                                    </div>
                                    <div className="recommended__book--sub-title">
                                        Notes on Startups, or How to Build the Future
                                    </div>
                                    <div className="recommended__book--details-wrapper">
                                        <div className="recommended__book--details">
                                            <div className="recommended__book--details-icon">
                                                <img src="" alt="" />
                                            </div>
                                            <div className="recommended__book--details-text">
                                                03:24
                                            </div>
                                        </div>
                                        <div className="recommended__book--details">
                                            <div className="recommended__book--details-icon">
                                                <img src="" alt="" />
                                            </div>
                                            <div className="recommended__book--details-text">
                                                4.4
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a className="for-you__recommended--books-link" href="">
                                    <div className="book__pill book__pill--subscription-require">Premium</div>
                                    <audio src=""></audio>
                                    <figure className='book__image--wrapper'>
                                        <img className="book__image" src="" alt="" />
                                    </figure>
                                    <div className="recommended__book--title">
                                        Zero to One
                                    </div>
                                    <div className="recommended__book--author">
                                        Peter Thiel with Blake Masters
                                    </div>
                                    <div className="recommended__book--sub-title">
                                        Notes on Startups, or How to Build the Future
                                    </div>
                                    <div className="recommended__book--details-wrapper">
                                        <div className="recommended__book--details">
                                            <div className="recommended__book--details-icon">
                                                <img src="" alt="" />
                                            </div>
                                            <div className="recommended__book--details-text">
                                                03:24
                                            </div>
                                        </div>
                                        <div className="recommended__book--details">
                                            <div className="recommended__book--details-icon">
                                                <img src="" alt="" />
                                            </div>
                                            <div className="recommended__book--details-text">
                                                4.4
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>  
  )
}

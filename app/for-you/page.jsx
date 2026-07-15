import React from 'react'
import search from "../../assets/search-icon.png"
import logo from "../../assets/logo.png"
import home from "../../assets/home-icon4.png"
import bookmark from "../../assets/bookmark-icon2.png"
import pen from "../../assets/pen-icon.png"
import settings from "../../assets/settings-icon.png"
import question from "../../assets/question-icon.png"
import logout from "../../assets/logout-icon.png"

export default function forYou() {
  
  
  return (
    <body>
        <div id="__next">
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
                                        <img className="search__icon--img" src={search.src} alt="" />
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
                                    <img className="sidebar__icon--img" src={home.src} alt="" />
                                </div>
                                <div className="sidebar__link--text">For you</div>
                            </a>
                            <a className="sidebar__link--wrapper">
                                <div className="sidebar__icon--wrapper">
                                    <img className="sidebar__icon--img" src={bookmark.src} alt="" />
                                </div>
                                <div className="sidebar__link--text">My library</div>
                            </a>
                            <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                                <div className="sidebar__icon--wrapper">
                                    <img className="sidebar__icon--img" src={pen.src} alt="" />
                                </div>
                                <div className="sidebar__link--text">Highlights</div>
                            </div>
                            <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                                <div className="sidebar__icon--wrapper">
                                    <img className="sidebar__icon--img" src={search.src} alt="" />
                                </div>
                                <div className="sidebar__link--text">Search</div>
                            </div>
                        </div>
                        <div className="sidebar__bottom">
                            <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                                <div className="sidebar__icon--wrapper">
                                    <img className="sidebar__icon--img" src={settings.src} alt="" />
                                </div>
                                <div className="sidebar__link--text">Settings</div>
                            </div>
                            <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                                <div className="sidebar__icon--wrapper">
                                    <img className="sidebar__icon--img" src={question.src} alt="" />
                                </div>
                                <div className="sidebar__link--text">Help & Support</div>
                            </div>
                            <a className="sidebar__link--wrapper">
                                <div className="sidebar__icon--wrapper">
                                    <img className="sidebar__icon--img" src={logout.src} alt="" />
                                </div>
                                <div className="sidebar__link--text">Logout</div>
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

import React from 'react'
import { BsStarFill } from 'react-icons/bs'

export default function Book() {
  return (
    <div className='row'>
        <div className="container">
            <div className="inner__wrapper">
                <div className="inner__book">
                    <div className="inner-book__title"></div>
                    <div className="inner-book__author"></div>
                    <div className="inner-book__sub--title"></div>
                    <div className="inner-book__wrapper">
                        <div className='inner-book__description--wrapper'>
                            <div className="inner-book__description">
                                <div className="inner-book__icon">
                                    <BsStarFill />
                                </div>
                                <div className="inner-book__overall--rating">&nbsp</div>
                                <div className="inner-book__total--rating">
                                    "("
                                    "&nbsp;rating)"
                                </div>
                            </div>
                            <div className="inner-book__description">
                                <div className="inner-book__icon">

                                </div>
                                <div className="inner-book__duration">00:00</div>
                            </div>
                            <div className="inner-book__description">
                                <div className="inner-book__icon">

                                </div>
                                <div className="inner-book__type"></div>
                            </div>
                            <div className="inner-book__description">
                                <div className="inner-book__icon">

                                </div>
                                <div className="inner-book__key--ideas"></div>
                            </div>
                        </div>
                    </div>
                    <div className="inner-book__read--btn-wrapper">
                        <button inner-book__read--btn>
                            <div className="inner-book__read--icon">

                            </div>
                            <div className="inner-book__read--text"></div>
                        </button>
                    </div>
                    <div className="inner-book__bookmark">
                        <div className="inner-book__bookmark--icon">

                        </div>
                        <div className="inner-book__bookmark--text">Add title to my library</div>
                    </div>
                    <div className="inner-book__secondary--title">
                        What's it about?
                    </div>
                    <div className="inner-books__tags--wrapper"></div>
                    <div className="inner-book__book--description"></div>
                    <h2 className="inner-book__secondary--title">About the author</h2>
                    <div className="inner-book__author--description"></div>
                </div>
                <div className="inner-book__img-wrapper">
                    <figure></figure>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'

export default function Player() {
  return (
    <div className="summary">
        <div className="audio__book--spinner">
        
        </div>
        <div className="audio_wrapper">
            <div className="audio__track--wrapper">
                <figure className='audio__track--image-mask'></figure>
                <div className="audio__Track--details-wrapper">
                    <div className="skeleton"></div>
                    <div className="skeleton"></div>
                </div>
            </div>
            <div className="audio__controls--wrapper">
                <div className="audio__controls">
                    <button className="audio__controls--btn">
                        {/* <img src="" alt="" /> */}
                    </button>
                    <button className="audio__controls--btn audio__controls--btn-play">
                        {/* <img src="" alt="" /> */}
                    </button>
                    <button className="audio__controls--btn">
                        {/* <img src="" alt="" /> */}
                    </button>
                </div>
            </div>
            <div className="audio__progress--wrapper">
                <div className="audio__time">0:00</div>
                {/* <input 
                    type="range"
                    style="background:linear-gradient(to right, #2bd97c 0%, #6D787D 0%)"
                    className='audio__progress--bar'
                    value="0" 
                /> */}
                <div className="audio__time">0:00</div>
            </div>
        </div>
    </div>
  )
}

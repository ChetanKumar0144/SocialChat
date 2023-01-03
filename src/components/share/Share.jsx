import React from 'react'
import './share.css';
import {MdPermMedia, MdLabel, MdRoom, MdEmojiEmotions} from 'react-icons/md'

const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="/assets/person/7.jpg" alt="" />
                <input type="text" placeholder='What`s in your mind Chetan ?' 
                    className='shareInput'/>
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <MdPermMedia style={{color:'tomato'}} className='shareIcon'/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <MdLabel style={{color:'blue'}} className='shareIcon'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <MdRoom style={{color:'green'}} className='shareIcon'/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <MdEmojiEmotions style={{color:'goldenrod'}} className='shareIcon'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share
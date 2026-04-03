import React from 'react'
import './videoPlayer.css'
import video from '../../Images/Video3.mp4'

const VideoPlayer = ({ playState, setPlayState }) => {
  return (
    <div 
      className={`video-player ${playState ? '' : 'hide'}`}
      onClick={() => setPlayState(false)}
    >
      <video
        src={video}
        autoPlay
        controls
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

export default VideoPlayer
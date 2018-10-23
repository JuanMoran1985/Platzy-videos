import React from 'react'
import '../component/video-player-layout.css'

const VideoPlayerLayout = (props) => (
    <div className="VideoPlayer">
        {props.children}
    </div>
)

export default VideoPlayerLayout;
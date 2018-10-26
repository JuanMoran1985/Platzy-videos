import React, { Component } from 'react';
import VideoPlayerLayout from '../component/video-player-layout'
import Video from '../component/video';
import Title from '../component/title';
import PlayPause from '../component/play-pausa.js'

class VideoPlayer extends Component {
    state={
        pause= true,
    }
    TogglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }
    render() {
        return (
            <VideoPlayerLayout>
                <Title
                    title="titulo video"
                />
                <PlayPause 
                    pause={this.state.pause}
                    hancleClick={this.TogglePlay}
                />
                <Video
                    autoplay={true}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;
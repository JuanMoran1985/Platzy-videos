import React, { Component } from 'react';
import VideoPlayerLayout from '../component/video-player-layout'
import Video from '../component/video';
import Title from '../component/title';

class VideoPlayer extends Component {
    render() {
        return (
            <VideoPlayerLayout>
                <Title
                    title="titulo video"
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
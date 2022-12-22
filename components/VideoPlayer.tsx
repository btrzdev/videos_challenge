import {
  VideoPlayerContainer,
  VideoPlayerBox,
  ControlBar,
  PlayButton,
} from "./PlayerContainer";
import React, { useRef } from "react";
import useVideoPlayer from "../hooks/useVideoPlayer";

const VideoPlayer = ({ video }: any) => {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);
  return (
    <VideoPlayerContainer>
      <ControlBar>
        <VideoPlayerBox
          ref={videoElement}
          src={video}
          onTimeUpdate={handleOnTimeUpdate}
        >
          <PlayButton onClick={togglePlay}>
            {!playerState.isPlaying ? (
              <i className="bx bx-play"></i>
            ) : (
              <i className="bx bx-pause"></i>
            )}
          </PlayButton>
        </VideoPlayerBox>
      </ControlBar>
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;

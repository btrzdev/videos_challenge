import { useRouter } from "next/router";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { ApiResponse } from "../types/ApiResponse";
import Header from "./Header";
import {
  VolumeControlButton,
  ProgressBar,
  ProgressDone,
} from "../components/PlayerContainer";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

export default function Home(props: ApiResponse) {
  const router = useRouter();

  const { queryId } = router.query;
  const videoRef = useRef<any>(null);

  const [videoIdSelected, setVideoIdSelected] = useState(queryId);
  const [currentSeek, setCurrentSeek] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [volumeBar, setVolumeBar] = useState(100);
  const [totalDurationOfVideo, setTotalDurationOfVideo] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playedTime, setPlayedTime] = useState(0);
  const [playedTimeDisplay, setPlayedTimeDisplay] = useState("");

  const handlePause = (e: any) => {
    const videoRefPause = videoRef?.current?.player;
    setIsPlay(false);
  };

  const handlePlay = (e: any) => {
    const videoRefPlay = videoRef?.current?.player;
    setIsPlay(true);
  };

  const handleVolumeChange = (e: any) => {
    setVolumeBar(e.target.value);
  };

  const handleDuration = (duration: any) => {
    setDuration(duration);
  };

  const handleFullscreen = (e: any) => {};

  const handleProgress = (progress: any) => {
    // console.log("onProgress", progress.playedSeconds);
    setPlayedTime(progress.playedSeconds);
    setPlayedTimeDisplay(playedTimeConverted(progress.playedSeconds));
  };

  const numberToTwoDigitString = (value: number) =>
    value >= 10 ? value : `0${value}`;

  const playedTimeConverted = (playedTimeInSeconds: number) => {
    const minutesInteger = Math.floor(playedTimeInSeconds / 60);
    const secondsRemainer = Math.floor(
      playedTimeInSeconds - minutesInteger * 60
    );

    return (
      numberToTwoDigitString(minutesInteger) +
      ":" +
      numberToTwoDigitString(secondsRemainer)
    );
  };

  const remainingToPlay = (duration: number, playedTime: number) => {
    const played = playedTime * 100;
    const time = played / duration;
    return Math.round(time);
  };

  return (
    <div>
      <Header title="VideoPLayer" />
      <div
        style={{
          width: "100vw",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ReactPlayer
          ref={videoRef}
          width="100%"
          height="500px"
          volume={volumeBar}
          playing={isPlay}
          url="https://www.youtube.com/embed/G7Lddc1ZYm4"
          onDuration={handleDuration}
          onProgress={handleProgress}
          pip={false}
          controls={false}
          light={false}
          muted={false}
          played={0}
          loaded={0}
          duration={0}
          playbackRate={1.0}
          loop={false}
        />
        <ProgressBar>
          <ProgressDone widthCustom={remainingToPlay(duration, playedTime)} />
        </ProgressBar>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {isPlay === false ? (
            <PlayArrowIcon style={{}} onClick={(e) => handlePlay(e)} />
          ) : (
            <PauseIcon onClick={(e) => handlePause(e)} />
          )}
          <div style={{ width: "200px" }}>
            <VolumeControlButton
              type="range"
              min={0}
              max={1}
              step={0.02}
              value={volumeBar}
              onChange={(event) => {
                handleVolumeChange(event);
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p>{playedTimeDisplay}</p>/<p>{playedTimeConverted(duration)}</p>
          </div>
        </div>
        <div>
          <FullscreenIcon type="button" onClick={(e) => handleFullscreen} />
        </div>
      </div>
      {/* 
        <Videos videos={props.videos} /> */}
    </div>
  );
}

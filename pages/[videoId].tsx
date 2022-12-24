import { NextPageContext } from "next";
import axios from "axios";
import Header from "../components/Header";
import Videos from "../components/Videos";
import { ApiResponse } from "../types/ApiResponse";
// import { VideoContainer } from "../components/VideoContainer";
// import VideoPlayer from "../components/VideoPlayer";
import React, { useEffect, useState, useRef, createRef } from "react";
import { useRouter } from "next/router";
import ReactPlayer, { ReactPlayerProps } from "react-player";
import dynamic from "next/dynamic";
import { type } from "os";

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

  const handleDuration = (duration: number) => {
    // console.log("onDuration", duration);
    setDuration(duration);
  };

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
    console.log(playedTimeInSeconds, minutesInteger, secondsRemainer);
    return (
      numberToTwoDigitString(minutesInteger) +
      ":" +
      numberToTwoDigitString(secondsRemainer)
    );
  };

  return (
    <div>
      <Header title="VideoPLayer" />

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
      <div>
        <button onClick={(e) => handlePlay(e)}>PLAY</button>
        <button onClick={(e) => handlePause(e)}>PAUSE</button>
        <button>VOLUME</button>
        <p>{duration / 60}</p>
        <p>{playedTimeDisplay}</p>
      </div>
      {/* 
      <Videos videos={props.videos} /> */}
    </div>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const paramDinamic = "search";
  const requestUrl = `https://youtube-v31.p.rapidapi.com/${paramDinamic}`;

  const response = await axios.request({
    url: requestUrl,
    method: "GET",
    params: {
      relatedToVideoId: "7ghhRHRP6t4",
      part: "id,snippet",
      type: "video",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": "b491821d89msh9e8f04a70420488p12210djsn55a804d8c992",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  });

  const queryId = context.query;

  const responseVideoId = await axios.request({
    url: `https://youtube-v31.p.rapidapi.com/videos?part=snippet,statistics&id=${queryId.videoId}`,
    method: "GET",
    params: {
      relatedToVideoId: "7ghhRHRP6t4",
      part: "id,snippet",
      type: "video",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": "b491821d89msh9e8f04a70420488p12210djsn55a804d8c992",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  });

  return {
    props: {
      videos: response.data,
      video: responseVideoId.data,
    },
  };
}

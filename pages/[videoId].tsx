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



const Home = dynamic(() => import("../components/VideoPage"), {
  ssr: false,
});

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

export default Home;

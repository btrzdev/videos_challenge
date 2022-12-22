import {
  VideoContainer,
  VideoItem,
  VideoBox,
  ChannelName,
  VideoInfos,
} from "./VideoContainer";
import { ImageLoaderProps } from "next/image";
import Image from "next/image";
import { ApiResponse } from "../types/ApiResponse";

const Video: React.FC<ApiResponse> = ({ videos }) => {
  const myLoader = ({ src }: ImageLoaderProps) => {
    return src;
  };

  return (
    <VideoContainer>
      {videos.items?.map((video) => (
        <VideoItem key={video.id}>
          <VideoBox>
            <div>
              <Image
                loader={myLoader}
                src={video.snippet.thumbnails.default.url}
                alt={"oi"}
                width={parseInt(video.snippet.thumbnails.default.width)}
                height={parseInt(video.snippet.thumbnails.default.height)}
              />
            </div>
            <VideoInfos>
              <h2>{video.snippet.title}</h2>
              <ChannelName>{video.snippet.channelTitle}</ChannelName>
            </VideoInfos>
          </VideoBox>
        </VideoItem>
      ))}
    </VideoContainer>
  );
};

export default Video;

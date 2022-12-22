import { VideoContainer, VideoItem, VideoBox } from "./VideoContainer";
import { VideosContainerProps } from "../types/VideoContainerProps";
import { ImageLoaderProps } from "next/image";
import Image from "next/image";
import { ApiResponse } from "../types/ApiResponse";

const Video: React.FC<ApiResponse> = ({ videos }) => {
  const myLoader = ({ src }: ImageLoaderProps) => {
    return src;
  };

  return (
    <VideoContainer>
      {videos?.map((video) => (
        <VideoItem key={video.videos.items}>
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
            <div>
              <h2>{video.snippet.title}</h2>
              <h2>{video.snippet.channelTitle}</h2>
            </div>
          </VideoBox>
        </VideoItem>
      ))}
    </VideoContainer>
  );
};

export default Video;

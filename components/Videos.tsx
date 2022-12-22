import { VideoContainer, VideoItem, VideoBox } from "./VideoContainer";
import { VideosContainerProps } from "../types/VideoContainerProps";

const Video: React.FC<VideosContainerProps> = ({ videos }) => {
  return (
    <VideoContainer>
      {videos?.map((video) => (
        <VideoItem key={video.id}>
          <VideoBox>
            <h1>{video.snippet.title}</h1>
          </VideoBox>
        </VideoItem>
      ))}
    </VideoContainer>
  );
};

export default Video;

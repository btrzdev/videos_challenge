import styled from "styled-components";

const VideoContainer = styled.ul`
  background: black;
  width: 100%;
  height: auto;
  font-size: 2rem;
`;

const VideoItem = styled.li`
  width: 100%;
  height: 100%;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
`;

const VideoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 2px;
  font-size: 2rem;
  background: red;
  color: white;
`;

export { VideoContainer, VideoItem, VideoBox, Thumbnail };

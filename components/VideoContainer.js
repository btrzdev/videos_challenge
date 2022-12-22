import styled from "styled-components";

const VideoContainer = styled.ul`
  background: black;
  width: 100vw;
  height: auto;
  font-size: 2rem;
`;

const VideoItem = styled.li`
  width: 300px;
  height: 200px;
`;

const VideoBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 2px;
  font-size: 2rem;
  background: red;
  color: white;
`;

export { VideoContainer, VideoItem, VideoBox };

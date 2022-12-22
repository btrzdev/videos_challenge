import styled from "styled-components";

const VideoContainer = styled.ul`
  flex-wrap: wrap;
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
  flex-direction: row;
  font-size: 0.5rem;
  background: black;
  font-weight: bold;
  color: white;
`;

const ChannelName = styled.h2`
  font-size: 0.5rem;
  margin-top: 0.5rem;
  color: white;
  font-weight: normal;
`;

const VideoInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export {
  VideoContainer,
  VideoItem,
  VideoBox,
  Thumbnail,
  VideoInfos,
  ChannelName,
};

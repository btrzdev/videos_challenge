import styled from "styled-components";

const VideoPlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const VideoPlayerBox = styled.div`
  width: 100%;
  max-width: 700px;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
`;

const ControlBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  bottom: 30px;
  padding: 14px;
  width: 100%;
  max-width: 500px;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transform: translateY(150%);
  transition: all 0.3s ease-in-out;
`;

const VolumeControlButton = styled.input`
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: goldenrod;
    margin-top: -4px;
    transition: background-color 150ms;
    &:hover {
      cursor: pointer;
    }
  }
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  position: absolute;
  width: 100vw;
  height: 30px;
  top: 93%;
  background: gray;
`;

const ProgressDone = styled.div`
  width: ${(props) => props.widthCustom}%;
  height: 100%;
  background: red;
`;

export {
  VideoPlayerContainer,
  VideoPlayerBox,
  ProgressBar,
  ControlBar,
  PlayButton,
  ProgressDone,
  VolumeControlButton,
};

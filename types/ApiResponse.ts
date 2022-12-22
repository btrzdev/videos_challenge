import { MediaType } from "./Media";
import { VideosContainerProps } from "./VideoContainerProps";

export interface ApiResponse {
  children?: JSX.Element | JSX.Element[];
  videos: {
    items: VideosContainerProps[];
  };
}

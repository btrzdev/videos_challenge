import { MediaType } from "./Media";
export interface VideosContainerProps {
  kind: string;
  id: {
    videoId: string;
    kind: string;
  };
  snippet: {
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      default: MediaType;
      high: MediaType;
      maxres: MediaType;
      medium: MediaType;
      standard: MediaType;
    };
    title: string;
  };
}

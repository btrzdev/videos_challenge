import { MediaType } from "./Media";
export interface VideosContainerProps {
  videos: [
    {
      id: string;
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
  ];
}

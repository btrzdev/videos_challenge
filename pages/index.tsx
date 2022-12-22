import { NextPageContext } from "next";
import axios from "axios";
import Header from "../components/Header";
import Videos from "../components/Videos";

export default function Home(props: any) {
  return (
    <>
      <Header title="EdTech" />
      {console.log(props.videos.items)}
      <Videos videos={props.videos.items} />
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const paramDinamic = "search";
  const requestUrl = `https://youtube-v31.p.rapidapi.com/${paramDinamic}`;

  const response = await axios.request({
    url: requestUrl,
    method: "GET",
    params: {
      relatedToVideoId: "7ghhRHRP6t4",
      part: "id,snippet",
      type: "video",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": "b491821d89msh9e8f04a70420488p12210djsn55a804d8c992",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  });

  console.log(response.data);

  return {
    props: { videos: response.data },
  };
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import { fetchfromApi } from "../constants/api";

const SearchFeed = () => {
  const [videosData, setVideosData] = useState([]);

  // for navigation
  const { term } = useParams();
  // fetching data from rapid-youtubeapi-v3
  useEffect(() => {
    // endpoint -> videosArray
    console.log('seachfeed: ' + term);
    fetchfromApi(`search?part=snippet&q=${term}`).then(({ data }) => {
      setVideosData(data.items);
    });
  }, [term]);

  // let a = 'Feed';
  // console.log(a);
  // a++;

  return (
    <Stack
      flexDirection="column"
      sx={{
        position: "relative",
        margin: "20px",
        width: "initial",
      }}
    >
      <Box
        className="videoContainer"
        style={{
          overflowY: "auto",
        }}
      >
        {videosData.map((videoData, i) => {
          return <VideoCard key={i} video={videoData} />;
        })}
      </Box>
    </Stack>
  );
};

export default SearchFeed;

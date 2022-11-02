import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import Categorization from "./Categorization";
import { fetchfromApi } from "../constants/api";

const Feed = () => {
  // category to be selected
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [videosData, setVideosData] = useState([]);

  // fetching data from rapid-youtubeapi-v3
  useEffect(() => {
    // endpoint -> videosArray
    fetchfromApi(`search?part=snippet&q=${selectedCategory}`).then(
      ({ data }) => {
        setVideosData(data.items);
      }
    );
  }, [selectedCategory]);

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
        className="categoryContainer"
        id="categoryContainer"
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "scroll",
          position: "relative",
        }}
      >
        {/* to get rid of 2 function and 13 render issue -> import as single component and and send api data and state and use maping over. */}
        <Categorization state={{ selectedCategory, setSelectedCategory }} />
      </Box>

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

export default Feed;

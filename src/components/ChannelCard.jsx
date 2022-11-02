import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { altProfilePicture, altThumbnailUrl } from "../constants/utils";
import StarFull from "@mui/icons-material/StarRounded";
import StarHalf from "@mui/icons-material/StarHalfRounded";
import StarNull from "@mui/icons-material/StarBorderRounded";
import { categories } from "../constants/utils";
import Categorization from "./Categorization";
import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  console.log(channel);
  function filterArray (category) {
    return category.name == "education"
  }
  
  return (
    <Link to={`/channel/${channel?.id?.channelId}`}>
    <Card
      className="channelCard"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        background: "transparent",
        height: "fit-content",
        boxShadow: "none",
        cursor: "pointer",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div style={{ position: "relative", margin: "10px 0" }}>
        {/* channel art */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            style={{ width: "100px", height: "100px" }}
            sx={{ borderRadius: "100%" }}
            alt="Live from space album cover"
            src={channel?.snippet?.thumbnails?.high?.url}
          />
        </div>
      </div>
      {/* video dis */}
      <CardContent
        sx={{
          mt: 1,
          p: 0,
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
          padding: 0,
          margin: 0,
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {/* channel title */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "fit-content",
            columnGap: 2,
            marginBottom: "3px",
          }}
        >
          <Typography
            component="div"
            variant="h6"
            style={{
              fontFamily: "Wavehaus-95semiBold",
              fontSize: { xs: "1rem", sm: "1.1rem" },
              fontWeight: 800,
              color: "#E1E1E1",
            }}
          >
            {channel?.snippet?.channelTitle}
          </Typography>
        </Box>
        {/* channel */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "flex-start",
          }}
        >
          {/* channel subscribers */}
          <Box sx={{ display: "flex", alignItems: "center", m: 0, p: 0 }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
              style={{
                fontFamily: "Wavehaus-66Book",
                fontSize: "1rem",
                fontWeight: 400,
                color: "#808080",
              }}
            >
              {/* {video.snippet.channelTitle} */}
              200K •
            </Typography>
          </Box>
          {/* channel rating */}
          <Box sx={{ display: "flex", alignItems: "center", m: 0, p: 0 }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
              style={{
                fontFamily: "Wavehaus-66Book",
                fontSize: "1rem",
                fontWeight: 400,
                color: "#808080",
              }}
            >
              <StarNull /> <StarNull /> <StarNull />
            </Typography>
          </Box>
        </div>
        {/* channel category */}
        <Box>
          {
            categories.filter(filterArray)
              .map((category,i) => {
                  console.log('at channel card categior' + category);
                  return (
                    <Typography
                      key={i}
                      variant="h4"
                      sx={{
                        fontFamily: "Wavehaus-95semiBold",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        borderRadius: "8px",
                        padding: "4px 20px",
                        color: `${category.color}`,
                        border: `1px solid ${category.color}`,
                        textAlign: "center",
                        height: "fit-content",
                        width: "fit-content",
                        background: "#1E1E1E",
                      }}> 
                      {category.name} 
                    </Typography>
                  );
                })
          }
        </Box>
      </CardContent>
    </Card>
    </Link>
  );
};

export default ChannelCard;

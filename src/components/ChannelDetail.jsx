import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchfromApi } from "../constants/api";
import { Box, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import { categories } from "../constants/utils";
import StarNull from "@mui/icons-material/StarBorderRounded";
import VideoCard from "./VideoCard";

const ChannelDetail = () => {
  function filterArray(category) {
    return category.name == "education"
  }
  function num_to_unit(num) {
    let snippet;
    let result;
    if (num >= 1000000000) {  // 10 Crore
      snippet = Number(num.slice(0, 2));
      result = `${snippet} crore`;
      return result;
    } else if (num >= 100000000) {  // 1 Crore
      snippet = Number(num.slice(0, 1));
      result = `${snippet} crore`;
      return result;
    } else if (num >= 1000000) {  // 10 lakh
      snippet = Number(num.slice(0, 2));
      result = `${snippet} lakh`;
      return result;
    } else if (num >= 100000) {   // 1 lakh
      const snippet = Number(num.slice(0, 1));
      result = `${snippet} lakh`;
      return result;
    } else if (num >= 10000) {  // 10 Thousands
      const snippet = Number(num.slice(0, 2));
      result = `${snippet} thousands`;
      return result;
    } else if (num >= 1000) { // 1 Thousands
      const snippet = Number(num.slice(0, 1));
      result = `${snippet} thousands`;
      return result;
    } else {
      result = num;
      return result;
    }

  }

  const [chnlDtx, setChnlDtx] = useState(null);
  const [vidDtx, setVidDtx] = useState(null);

  const { cid } = useParams();

  useEffect(() => {
    // endpoint -> channelArray
    fetchfromApi(`channels?part=snippet&id=${cid}`).then(({ data }) => {
      setChnlDtx(data.items[0]);
    });
    // endpoint -> videosArray
    fetchfromApi(`search?channelId=${cid}&part=snippet&order=date`).then(({ data }) => {
      setVidDtx(data.items);
    });
  }, [cid]);
  console.log(chnlDtx, vidDtx)
  // return <div>{}</div>;
  return (
    <div style={{
      background: '#1E1E1E',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div className="channelart" style={{ width: '100%' }}>
        <img style={{
          objectFit: 'cover',
          width: '100%',
          height: 'inherit'
        }} src={chnlDtx?.brandingSettings?.image?.bannerExternalUrl} alt="chnlart" />
      </div>
      <Card
        className="channelCard"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          background: "transparent",
          height: "fit-content",
          boxShadow: "none",
          justifyContent: "center",
          height: "100%",
          rowGap: '20px',
          marginTop: '20px',
          padding: { xs: "0 20px", md: "0 40px" }
        }}
      >
        {/* top */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: 'space-between',
          alignItems: 'center',

        }}>
          {/* channel dp */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              columnGap: '10px'
            }}
          >
            <CardMedia
              component="img"
              sx={{ borderRadius: "100%", width: { xs: "70px", md: "100px" }, height: { xs: "70px", md: "100px" } }}
              alt="Live from space album cover"
              // src='https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s88-c-k-c0x00ffffff-no-rj'
              src={chnlDtx?.snippet?.thumbnails?.high?.url}
            />
            {/* channel title */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                columnGap: 1,
              }}
            >
              {/* chnl name */}
              <Typography
                component="div"
                variant="h6"
                sx={{
                  fontFamily: "Wavehaus-95semiBold",
                  fontSize: { xs: "1rem", sm: "1.2rem" },
                  fontWeight: 800,
                  color: "#E1E1E1",
                }}
              >
                {chnlDtx?.snippet?.title}
              </Typography>
              {/* chnl subscribers */}
              <Typography
                component="div"
                variant="h6"
                sx={{
                  fontFamily: "Wavehaus-95semiBold",
                  fontSize: { xs: "0.9rem", sm: "1.1rem" },
                  fontWeight: 300,
                  color: "#7e7e7e",
                }}
              >
                {chnlDtx?.statistics?.subscriberCount ? num_to_unit(chnlDtx?.statistics?.subscriberCount) : ''} subscribers
              </Typography>
            </Box>
          </div>

          {/* subscribe btn */}
          <Button variant="contained" size='small' sx={{ background: '#BD5959', color: '#E1E1E1' }}>subscribe</Button>
        </div>
        {/* bottom */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: 'space-between',
          alignItems: 'center',

        }}>
          {/* channel category */}
          <Box>
            {
              categories.filter(filterArray)
                .map((category, i) => {
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
      </Card>
      <Box
        className="videoContainer"
        style={{
          overflowY: "auto",
          width: '100%',
          padding: '20px'
        }}>
        {
          vidDtx &&
          vidDtx.map((videoData, i) => {
            return <VideoCard key={i} video={videoData} />;
          })
        }
      </Box>
    </div>
  );
};

export default ChannelDetail;

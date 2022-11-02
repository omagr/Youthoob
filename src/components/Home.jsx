import { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Sidebar from "./SIdebar";
import Feed from "./Feed";

const Home = () => {
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: { xs:"column", md: "row" },
    }}
      style={{
        width: "100vw",
        justifyContent: { sm: "column", md: "space-between" },
        alignContent: "center",
      }}
    >
      {/* slidebar */}
      <Stack
        sx={{
          background: "#2D2D2E",
          width: { sm: "100vw", md: "20vw" },
          borderRight: "1px solid #000",
          position: { sm: "fixed", md: "relative" },
          zIndex: 90,
        }}
      >
        <Box
          sx={{
            height: { sm: "auto", md: "92vh" },
            px: { sm: 0, md: 2 },
          }}
          style={{
            overflow: "scroll",
            width: "initial",
          }}
        >
          <Sidebar />
        </Box>
      </Stack>
      {/* feed */}
      <Stack
        sx={{
          background: "#1E1E1E",
          width: { sm: "100vw", md: "80vw" },
          marginTop: { sm: "65px", md: "0" },
        }}
      >
        <Feed />
      </Stack>
    </Box>
  );
};

export default Home;

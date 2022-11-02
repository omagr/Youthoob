import { Stack } from "@mui/material";
import { directory } from "../constants/utils";
import { useState } from "react";

const Sidebar = () => {

  // let a = 'Sidebar'
  // console.log(a);
  // a++;

  const [chooseDirectory, setChooseDirectory] = useState("Home");
  
  return (
    <Stack
      direction="row"
      sx={{
        position: { sm: "relative", md: "fixed" },
        height: { sm: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
      style={{
        flexDirection: { md: "column" },
        padding: '0 4px',
        overflowY: 'scroll'
      }}
    >
      {directory.map((agenda, i) => (
        <button
          key={i}
          onClick={() => { setChooseDirectory(agenda.name) }}
          className={`category-btn ${chooseDirectory == agenda.name && 'active-category-btn'}`}
          style={{
            opacity: 0.5,
            background: "transparent",
            color: "#fff",
            fontFamily: "Wavehaus-95semiBold",
            fontSize: { sm: ".7rem", md: "1rem" },
          }}
        >
          <span
            style={{
              marginRight: "12px",
            }}
          >
            {agenda.icon}
          </span>
          <span>{agenda.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;

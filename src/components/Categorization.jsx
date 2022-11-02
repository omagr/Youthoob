import { Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { categories } from "../constants/utils";

const Categorization = ({ state }) => {

  // let a = 'Categorization';
  // console.log(a);
  // a++;

  return categories.map((category, i) => {
    return <Typography
      key={i}
      onClick={() => {
        state.setSelectedCategory(category.name);
      }}
      className={`interest-btn ${state.selectedCategory == category.name && "active-interest-btn"}`}
      variant="h4"
      sx={{
        fontFamily: "Wavehaus-95semiBold",
        fontSize: "1.2rem",
        fontWeight: "bold",
        borderRadius: "8px",
        padding: "4px 20px",
        marginRight: "18px",
        color: `${state.selectedCategory == category.name ? '#1E1E1E' : category.color}`,
        border: `1px solid ${category.color}`,
        cursor: "pointer",
        textAlign: "center",
        height: "fit-content",
        width: "fit-content",
        background: `${state.selectedCategory == category.name ? category.color : '#1E1E1E'}`
      }}
    >
      {category.name}
    </Typography>
  })
}

export default Categorization;

import { useState, useEffect } from "react";

export { default as Navbar } from "./Navbar";
export { default as Home } from "./Home";
export { default as ChannelDetail } from "./ChannelDetail";
export { default as VideoDetail } from "./VideoDetail";
export { default as SearchDetail } from "./SearchBar";

// width and height
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}
export default useWindowDimensions;

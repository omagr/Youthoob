import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import {Home,Navbar,VideoDetail,ChannelDetail,SearchDetail} from './components/export';
import SearchBar from './components/SearchBar';
import SearchFeed from './components/SearchFeed';

function App() {
return (
<>
  <Router>
    <Box sx={{backgroundColor: "#2D2D2E"}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        {/* <Route path="/search/:vid" element={<VideoDetail/>}/> */}
        <Route path="/channel/:cid" element={<ChannelDetail/>}/>
        <Route path="/search/:term" element={<SearchFeed/>}/>
      </Routes>
    </Box>
  </Router>
  {/* <Box
  sx={{
    display:'flex',
    flexDirection: {xs: 'column', sm: 'row', md:'column-reverse'}
  }}>
    <div style={{width:'200px', background:'#f56'}}>one</div>
    <div style={{width:'200px', background:'#f43'}}>two</div>
  </Box> */}
</>
);
}
export default App;
import { Stack, } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import SearchBar from './SearchBar';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky', background: '#2D2D2E', top: 0, justifyContent: 'space-between',
        border:'1px solid #000',
        zIndex:100
      }}>
      <Link to='/' style={{ display: "flex", alignItems: 'center' }}>
        <img src={logo} style={{ width: "25%", marginRight: "10px" }} alt="logo" />
        <h1 style={{
          fontFamily: "Wavehaus-158ExtraBold",
          fontSize: "1.2rem",
          fontWeight: 800,
          color: "#E1E1E1"
        }}>YouThoob.</h1>
      </Link>
      <div style={{
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        columnGap: '12px'
      }}>
        <SearchBar />
        <Link to='/' style={{ display: "flex", alignItems: 'center' }}>
          <DragIndicatorIcon style={{ color: "#E1E1E1", fontSize: '1.5rem' }} />
        </Link>
        <Link to='/' style={{ display: "flex", alignItems: 'center' }}>
          <NotificationsNoneIcon style={{ color: "#E1E1E1", fontSize: '1.7rem' }} />
        </Link>
        <Link to='/' style={{ display: "flex", alignItems: 'center' }}>
          <AccountCircleIcon style={{ color: "#E1E1E1", fontSize: '2rem' }} />
        </Link>
      </div>
    </Stack>

  )
}

export default Navbar;

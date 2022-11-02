import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Paper,IconButton} from '@mui/material';
import {Search, SearchIcon} from '@mui/icons-material';
import searchicon from '../assets/searchicon.svg';
import useWindowDimensions from './export';

const SearchBar = () => {
  // for ui
  const { height, width } = useWindowDimensions();
  const [clickSearch, setClickSearch] = useState(false);

  // for navigation 
  const Navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  function handleSubmit (e) {
    e.preventDefault();
    console.log(searchTerm);
    if (searchTerm) {
      Navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }
  
  const fullSearchBar ={
    position: 'absolute',
    left: 0,
    zIndex: 100,
    width: '100%',
    background: '#2D2D2E',
    padding: '25px',
  }
  return (
    <div style={clickSearch ? fullSearchBar : {position: 'relative', padding: '0px'}}>
    <Paper
    component= {`${width < 600 ? (clickSearch ? 'form' : 'div') : 'form'}`}
    onSubmit={e => {setClickSearch(false); handleSubmit(e);}}
    sx={{
      display:'flex',
      flexDirection:'row',
      border: `${width < 600 ? (clickSearch ? '1px solid #fff' : 'none') : '1px solid #fff'}`,
      borderRadius: '16px',
      backgroundColor: "transparent",
      color: "#fff",
      padding: `${width < 600 ? (clickSearch ? '0 25px' : '0px') : '0 25px'}`,
      width:'100%',
    }}
    onClick={() => {setClickSearch(true); console.log('form clicked');}}
    >
      <IconButton type='submit'
      sx={{
        p: `${width < 600 ? (clickSearch ? '10px' : '0px') : '10px'}`
      }}>
        <img src={searchicon} alt="" />
      </IconButton>
      <input
      style={{
        backgroundColor: "transparent",
        color: "#E1E1E1",
        fontFamily: "Wavehaus-128Bold",
        fontSize: ".9rem",
        width:'15rem',
        display: `${clickSearch ? 'block' : (width < 600 ? 'none' : 'block')}`,

      }}
      className='search-bar'
      placeholder={width < 600 ? (clickSearch ? 'recommendation sucks! search it.' : '') : 'recommendation sucks! search it.'}
      onChange={e => {setSearchTerm(e.target.value)}}
      value={searchTerm}
      />
    </Paper>
    </div>
  )
}

export default SearchBar
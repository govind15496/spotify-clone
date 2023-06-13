import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';
// import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
// import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
// import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Login() {
  return (
    <div className='login'>

        <img 
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=''
        />
        {/* <HomeIcon />
        <SearchIcon />
        <LibraryMusicIcon />


        <PlaylistAddIcon />
        <FavoriteBorderIcon /> */}

        <a href={loginUrl}>Login with spotify</a>
    </div>
  )
}

export default Login;
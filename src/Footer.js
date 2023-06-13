import React from 'react';
import './Footer.css';
import { Shuffle, VolumeDown } from '@mui/icons-material';
import { SkipPrevious } from '@mui/icons-material';
import { PlayCircleOutline } from '@mui/icons-material';
import { SkipNext } from '@mui/icons-material';
import { Repeat } from '@mui/icons-material';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
// import Tooltip from '@mui/material/Tooltip';
// import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
// import LyricsIcon from '@mui/icons-material/Lyrics';
// import QueueMusicIcon from '@mui/icons-material/QueueMusic';

function Footer() {

  // const [isHover, setIsHover] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHover(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHover(false);
  // };

  return (
    <div className='footer'>
        <div className='footer__left'>
            <img 
              className='footer__albumLogo' 
              src='https://upload.wikimedia.org/wikipedia/en/2/2e/Usher-yeah.jpg' alt='' />
            <div className='footer__dongInfo'>
              <h4>Yeah!</h4>
              <p>Usher</p>
            </div>
            {/* <PictureInPictureAltIcon /> */}
        </div>

        <div className='footer__center'>
            <Shuffle className='footer__green' /> 
            {/* {isHover&& <Tooltip title="Enble Shuffle" placement="top"></Tooltip>}  */}
            <SkipPrevious className='footer__icon' />
            <PlayCircleOutline title="Message needs to be shown" fontSize='large' className='footer__green' />
            <SkipNext className='footer__icon' />
            <Repeat className='footer__green' />
        </div>

        <div className='footer__right' >
          <Grid container spacing={2}>
            {/* <Grid item>
              <LyricsIcon />
            </Grid>
            <Grid item>
              <QueueMusicIcon />
            </Grid> */}
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDown />
            </Grid>
            <Grid item xs>
              <Slider />
            </Grid>
          </Grid>
        </div>
    </div>
  )
}

export default Footer;
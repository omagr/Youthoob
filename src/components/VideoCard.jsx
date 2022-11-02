import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { altProfilePicture, altThumbnailUrl } from '../constants/utils';
import ChannelCard from './ChannelCard';


const VideoCard = ({video}) => {
    if (video.id.kind == 'youtube#video') {
        return (
        <Card
            className='videoCard'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                background: 'transparent',
                transform: { sm: "scale(1)", md: "scale(0.9)" },
                height: 'fit-content',
                boxShadow: 'none',
                cursor: 'pointer'
            }}>
            <div style={{ position: 'relative' }}>
                {/* tumbnail */}
                <CardMedia
                    component="img"
                    style={{ height: '11.25rem', marginBottom: '12px', borderRadius: '8px' }}
                    alt="tumbnail"
                    src={video?.snippet?.thumbnails?.high?.url}
                />
                <div className="video-duration" style={{
                    position: 'absolute',
                    bottom: '18px',
                    right: '9px',
                    background: '#000',
                    padding: '5px',
                    color: '#fff',
                    fontSize: '8px',
                    borderRadius: '4px',
                    letterSpacing: 1,
                    fontFamily: 'Wavehaus-28Thin'
                }}>12:00</div>
            </div>
            {/* video dis */}
            <CardContent sx={{
                mt: 1, p: 0,
            }} style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '3px',
                padding: 0,
                margin: 0
            }} >
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: 'fit-content', columnGap: 2, marginBottom: '3px' }}>
                    {/* channel dis */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
                        <CardMedia
                            component="img"
                            style={{ width: '40px', height: '40px' }}
                            sx={{ borderRadius: '100%' }}
                            video="https://youtu.be/FHTbsZEJspU"
                            alt="Live from space album cover"
                            src='https://images.unsplash.com/photo-1664742913315-31e146c629ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
                        />
                    </div>
                    {/* video title */}
                    <Box sx={{
                        display: 'flex', flexDirection: 'column'
                    }}>
                        <Typography component="div" variant="h6" style={{
                            fontFamily: "Wavehaus-95semiBold",
                            fontSize: { xs: "1rem", sm: "1.1rem" },
                            fontWeight: 800, color: "#E1E1E1",
                        }}>
                            {video.snippet.title.length > 40 ? video.snippet.title.slice(0, 40) + '...' : video.snippet.title}
                        </Typography>
                    </Box>
                </Box>
                {/* channel name */}
                <div>
                    <Box sx={{ display: 'flex', alignItems: 'center', m: 0, p: 0 }}>
                        <Typography variant="subtitle1" color="text.secondary" component="span" style={{
                            fontFamily: "Wavehaus-66Book",
                            fontSize: "1rem",
                            fontWeight: 400, color: "#808080"
                        }}>
                            {video.snippet.channelTitle}
                        </Typography>
                    </Box>
                    {/* video context */}
                    <Box sx={{ display: 'flex', alignItems: 'center', m: 0, p: 0 }}>
                        <Typography variant="subtitle1" color="text.secondary" component="span" style={{
                            fontFamily: "Wavehaus-66Book",
                            fontSize: "1rem",
                            fontWeight: 400, color: "#808080",
                        }}>
                            1M views • 2 days ago • 2 rating
                        </Typography>
                    </Box>
                </div>
                {/* video category */}
                <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: 1, mt: 1 }}>
                    <Typography
                        variant='h6' fontWeight="bold" sx={{
                            fontFamily: "Wavehaus-95semiBold",
                            fontSize: "0.7rem",
                            border: '1px solid #fff',
                            padding: '4px 20px',
                            borderRadius: '8px',
                            color: '#fff',
                            width: 'fit-content'
                        }}>
                        all
                    </Typography>
                    <Typography
                        variant='h6' fontWeight="bold" sx={{
                            fontFamily: "Wavehaus-95semiBold",
                            fontSize: "0.7rem",
                            border: '1px solid #fff',
                            padding: '4px 20px',
                            borderRadius: '8px',
                            color: '#fff',
                            width: 'fit-content'
                        }}>
                        all
                    </Typography>
                </Box>
            </CardContent>
            <hr className='divider'/>
        </Card>
        )
    } else {
        return <ChannelCard channel={video}/>
    }
}
export default VideoCard;
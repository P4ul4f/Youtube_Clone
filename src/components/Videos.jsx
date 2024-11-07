import React from "react";
import { Stack, Box, Grid } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <Grid 
      container 
      spacing={3}  // Espacio entre las cartas
      justifyContent="center"
      px="2rem"
    >
      {videos.map((item, idx) => (
        <Grid 
          item 
          xs={12}      // En pantallas pequeñas, ocupa todo el ancho
          sm={4}       // En pantallas medianas (sm), 3 cartas por fila
          md={3}       // En pantallas grandes (md), 4 cartas por fila
          key={idx} 
        >
          <Box>
            {/* Si el video tiene videoId, mostramos VideoCard */}
            {item.id.videoId && <VideoCard video={item} />}
            {/* Si el video tiene channelId, mostramos ChannelCard */}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Videos;

import React from 'react';
import {
  Add as AddIcon,
  Done as DoneIcon,
} from '@mui/icons-material';

const Tracks = ({ tracks = [] }) => {
    
 return (
   
   <div class="tracks">
  { tracks.map(({ url, trackNumber, icon: ListIcon = DoneIcon, trackTitle, trackPlays}) => (
    <div class="track">
      <div class="track__art">
        <img src={url}  />
      </div>
      <div class="track__number">
        {trackNumber}
      </div>
      <div class="track__added">
        <ListIcon className="trackAdd"></ListIcon>
      </div>
      <div class="track__title">
        {trackTitle}
      </div>
      <div class="track__explicit">
        <span class="label">
          Explicit
        </span>
      </div>
      <div class="track__plays">
        {trackPlays}
      </div>
    </div>
  

  ))}
</div>
  );
}
export default  Tracks;
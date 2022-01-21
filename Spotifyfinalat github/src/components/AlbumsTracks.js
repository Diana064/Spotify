import React from 'react';
import {
  CallMissedOutgoing as CallMissedOutgoingIcon,
  Done as DoneIcon,
} from '@mui/icons-material';

const AlbumsTracks = ({ tracks = [] }) => {
    
 return (
   
  <>
  { tracks.map(({ number, icon: ListIcon = DoneIcon, trackTitle, feature, trackLength}) => (
    <div class="track">
    <div class="track__number">
      {number}
    </div>
    <div class="track__added">
      <ListIcon className="trackAdd">
      </ListIcon>
    </div>
    <div class="track__title featured">
    <span class="title">
      {trackTitle}
      </span>
    <span class="feature">
      {feature}
      </span>
  </div>
    <div class="track__explicit">
      <span class="label">
        Explicit
        </span>
    </div>
    <div class="track__length">
      {trackLength}
    </div>
    <div class="track__popularity">
      <CallMissedOutgoingIcon className="trackAdd"></CallMissedOutgoingIcon>
    </div>
  </div>
  

  ))}
</>
  );
}
export default AlbumsTracks;
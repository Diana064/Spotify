import React from 'react';


const Artists = ({ artist = [] }) => {
    
 return (
   
    <div class="related-artists">
  { artist.map(({ src, nameArtist}) => (
    <a href="#" class="related-artist">
    <div class="related-artist__img">
      <img src={src}  />
    </div>
    <div class="related-artist__name">
      {nameArtist}
    </div>
  </a>
  

  ))}
</div>
  );
}
export default  Artists;
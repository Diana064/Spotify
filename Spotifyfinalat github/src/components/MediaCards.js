import React from 'react';

const MediaCards = ({ cards = [] }) => {
    
 return (
   <>
  { cards.map(({ url, nameCard}) => (
    <div class="media-card">
        <div class="media-card__image" >
            <img src={url} />
        </div>
        <a class="media-card__footer">{nameCard}</a>
    </div>
    
  ))}
</>
  );
}
export default  MediaCards;

import React, { useState } from 'react';
import {
    KeyboardArrowDown as KeyboardArrowDownIcon,
  
    MusicNote as  MusicNoteIcon,
    
} from '@mui/icons-material';
const PlaylistNavBar = ({ url, title, id, tracks }) => {
    const [dropDown, setDropDown] = useState(false);

    const handleDropDown = () => {
        setDropDown(!dropDown);
        };
 return (
     
    <div class="navigation__text">

    <div class="navigation__text__header" 
            role="button" 
            data-toggle="collapse" 
            href={url} 
            aria-expanded="true" 
            aria-controls={title}>
                {title}
        <button onClick={handleDropDown}>
            <KeyboardArrowDownIcon className="arrowDownIcon"></KeyboardArrowDownIcon>
        </button>
    </div>
    {(dropDown) && (
        <div class="collapse in" id={id}>
                      
            {tracks.map(({ url, title, icon: ListIcon = MusicNoteIcon}) => (
                <a href={url} class="navigation__text__item">
                <ListIcon className="btnMNI"></ListIcon>
                    <div class="text-musical-notes"></div>
                    <p>{title}</p>
                </a>
                
              
            ))}
        </div>
    )}

   </div>



);
}
export default  PlaylistNavBar;
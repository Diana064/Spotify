import { borderRadius } from '@mui/system';
import React, {useState } from 'react';
import { Range } from 'react-range';


const VolumeSlider = () => {
  const [volume, setVolume] = useState([50]);

    return (
      <Range
        step={1}
        min={0}
        max={100}
        values={volume}
        onChange={(v) => setVolume(v)}
        renderTrack={({ props, children }) => (
          <div 
            {...props}
            style={{
              ...props.style,
              height: '3px',
              backgroundColor: 'rgb(153, 153, 153)',
              cursor: 'pointer',
              height: '3px',
              width: '60px',
              color: 'rgb(153, 153, 153)',
              margin: '14px 0px'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '10px',
              width: '10px',
              backgroundColor: '#999',
              borderRadius: '50%'
              
            }}
    
          />
        )}
      />
    );
}
export default VolumeSlider;
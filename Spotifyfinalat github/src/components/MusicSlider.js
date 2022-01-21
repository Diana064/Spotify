import { borderRadius } from '@mui/system';
import React, {useState } from 'react';
import { Range } from 'react-range';


const MusicSlider = () => {
const [start, setStart] = useState([50]);

    return (
      <Range
        step={1}
        min={0}
        max={100}
        values={start}
        onChange={(v) => setStart(v)}
        renderTrack={({ props, children }) => (
          <div 
            {...props}
            style={{
              ...props.style,
              height: '3px',
              backgroundColor: 'rgb(153, 153, 153)',
              cursor: 'pointer',
              height: '3px',
              width: '100%',   
              color: 'rgb(153, 153, 153)',   
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
export default MusicSlider;
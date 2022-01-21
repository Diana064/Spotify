import React, {
  memo,
  useCallback,
  useState,
  useEffect,
} from "react";
import { render } from "react-dom";


const RangeSlider = memo(
  ({ classes, onChange, value, ...sliderProps }) => {
    const [sliderVal, setSliderVal] = useState(0);
    const [mouseState, setMouseState] = useState(null);

    useEffect(() => {
      setSliderVal(value);
    }, [value]);

    const changeCallback = e => {
      setSliderVal(e.target.value);
    };

    useEffect(() => {
      if (mouseState === "up") {
        onChange(sliderVal);
      }
    }, [mouseState]);
    console.log("RENDER");
    return (
      <div className="range-slider">
        <input
          type="range"
          value={sliderVal}
          {...sliderProps}
          className={`slider ${classes}`}
          onChange={changeCallback}
          onMouseDown={() => setMouseState("down")}
          onMouseUp={() => setMouseState("up")}
        />
      </div>
    );
  }
);

// export default RangeSlider;

    const VolumeSlider = () => {
      const [parentVal, setParentVal] = useState(70);

      const sliderValueChanged = useCallback(val => {
        console.log("NEW VALUE", val);
        setParentVal(val);
      });

      const sliderProps = {
        min: 0,
        max: 100,
        value: parentVal,
        onChange: e => sliderValueChanged(e)
      }

      return (
        
          <RangeSlider {...sliderProps} classes="volume-song" />
      
      );
    };

export default VolumeSlider;
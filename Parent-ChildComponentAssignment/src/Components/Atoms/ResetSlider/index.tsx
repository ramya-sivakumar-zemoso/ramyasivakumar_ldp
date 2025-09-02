import Slider from '@mui/material/Slider';

const ResetSlider = () => {
  return (
    <Slider
      defaultValue={50}
      aria-label="Default"
      valueLabelDisplay="auto"
      id="reset-slider"
    />
  );
};

export default ResetSlider;

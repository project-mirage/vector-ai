import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

type VFitCompareProps = {
  imageOneUrl: string;
  imageTwoUrl: string;
};

const VFitCompare = ({ imageOneUrl, imageTwoUrl }: VFitCompareProps) => {
  return (
    <ReactCompareSlider
      itemOne={
        <ReactCompareSliderImage
          src={imageOneUrl}
          alt="Image one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src={imageTwoUrl}
          alt="Image two"
          style={{
            backgroundColor: "white",
            backgroundImage: `
        linear-gradient(45deg, #ccc 25%, transparent 25%),
        linear-gradient(-45deg, #ccc 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #ccc 75%),
        linear-gradient(-45deg, transparent 75%, #ccc 75%)`,
            backgroundSize: `20px 20px`,
            backgroundPosition: `0 0, 0 10px, 10px -10px, -10px 0px`,
          }}
        />
      }
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default VFitCompare;

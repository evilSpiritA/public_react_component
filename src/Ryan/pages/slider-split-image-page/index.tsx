import SliderSplitImage from "@/Ryan/components/slider-split-image";
import { data } from "@/Ryan/assets/dummyData";

const SliderSplitImagePage = () => {
  return (
    <>
      <div className="wrapper">
        <SliderSplitImage propsData={data} />
      </div>
    </>
  );
};

export default SliderSplitImagePage;

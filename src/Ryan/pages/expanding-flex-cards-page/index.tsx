import ExpandingFlexCards from "@/Ryan/components/expanding-flex-cards";
import { data } from "@/Ryan/assets/dummyData";

const ExpandingFlexCardsPage = () => {
  return (
    <>
      <div style={{width:'90vw',height:'90vh', margin:'40px auto'}}>
        <ExpandingFlexCards propsData={data} />
      </div>
    </>
  );
};

export default ExpandingFlexCardsPage;

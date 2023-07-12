import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from '@/Main/components/loader'
import { LeftLayer, RightLayer } from '@/Main/components/transitions-layer'

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [openLeftLayout, setOpenLeftLayout] = useState(false);
  const [openRightLayout, setOpenRightLayout] = useState(false);

  function changePage(e: any) {
    if (e.target.id == 'SEAN') {
      setOpenLeftLayout(true);
      clearMainWrapper();
      setTimeout(() => {
        navigate("Sean/MainDisplayPage")
      }, 1000)
    } else if (e.target.id == 'RYAN') {
      setOpenRightLayout(true);
      clearMainWrapper();
      setTimeout(() => {
        navigate("/MainDisplayPage")
      }, 1000)
    }
  }

  function clearMainWrapper() {
    setTimeout(() => {
      const _mainWrapper = document.querySelector('.mainWrapper') as HTMLElement;
      if (_mainWrapper != null) {
        _mainWrapper.style.opacity = '0';
      }
    }, 500)
  }

  return (
    <>
      <div className="homeWrapper">
        <Loader />
        <LeftLayer active={openLeftLayout} />
        <RightLayer active={openRightLayout} />
        <div className="mainWrapper">
          <div id="SEAN" className="leftWrapper fadeInLTR" onClick={changePage}>
            <div className="leftFont">
              <span>SEAN</span>
            </div>
          </div>
          <div id="RYAN" className="rightWrapper fadeInRTL" onClick={changePage}>
            <div className="rightFont">
              <span>RYAN</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

import "./style.scss";
import gsap from "gsap"
import Lenis from '@studio-freight/lenis'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { clsx } from 'clsx';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [openLeftLayout, setOpenLeftLayout] = useState(false);
  const [openRightLayout, setOpenRightLayout] = useState(false);

  //#region [loader]
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical', // vertical, horizontal
    gestureOrientation: 'vertical', // vertical, horizontal, both
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })
  lenis.stop()
  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  useEffect(() => {
    //loader
    gsap.to('.loader', {
      x: '100%', duration: 0.8, ease: 'power4.inOut', delay: 1.5, onComplete: () => {
        document.body.style.overflowY = 'auto'
        lenis.start()
      }
    })
  }, [])

  // #endregion


  function changePage(e: any) {
    if (e.target.id == 'SEAN') {
      setOpenLeftLayout(true)
      setTimeout(() => {
        navigate("/Eightofwands8")
      }, 1000)
    } else if (e.target.id == 'RYAN') {
      setOpenRightLayout(true)
      setTimeout(() => {
        navigate("/SliderContinuousPage")
      }, 1000)
    }
  }


  return (
    <>
      <div className="homeWrapper">

        <div className="loader">
          <p>Loading... Please wait</p>
        </div>

        <div className={clsx('left-layer', openLeftLayout ? "active" : '')}>
          <div className="left-layer-1"></div>
          <div className="left-layer-2"></div>
          <div className="left-layer-3"></div>
        </div>

        <div className={clsx('right-layer', openRightLayout ? "active" : '')}>
          <div className="right-layer-1"></div>
          <div className="right-layer-2"></div>
          <div className="right-layer-3"></div>
        </div>

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

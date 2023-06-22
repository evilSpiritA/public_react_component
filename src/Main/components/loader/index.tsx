import "./style.scss";
import gsap from "gsap"
import Lenis from '@studio-freight/lenis'
import { useEffect } from "react";

const Loader: React.FC = () => {
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
    return (
        <>
            <div className="loader">
                <p>Loading... Please wait</p>
            </div>
        </>
    )
}

export default Loader;
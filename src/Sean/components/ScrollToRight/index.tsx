import { useState, useRef, useEffect } from "react";

interface MoveInWidthwiseProps {
  displayed: JSX.Element;
  height?: string;
}

const ScrollToRight: React.FC<MoveInWidthwiseProps> = ({
  displayed,
  height,
}) => {
  const displayedWrapper = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<string>("0px");
  const [wrapperWidth, setWrapperWidth] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const { innerWidth, innerHeight, addEventListener, removeEventListener } =
    window;

  const updateProgress = () => {
    const { scrollTop } = document.documentElement;
    const containerTop = container.current!.offsetTop;
    const containerHeightNumber = container.current!.offsetHeight;

    const newProgress =
      ((scrollTop - containerTop) * 100) /
      (containerHeightNumber - innerHeight);

    setProgress(newProgress);
  };

  useEffect(() => {
    if (!height) {
      setContainerHeight(
        `${
          (innerHeight * displayedWrapper.current!.offsetWidth) / innerWidth
        }px`
      );
    } else {
      setContainerHeight(height);
    }

    setWrapperWidth(displayedWrapper.current!.offsetWidth);
    // eslint-disable-next-line
  }, [height]);

  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);
  useEffect(() => {
    updateProgress();
    addEventListener("scroll", updateProgress);
    return () => {
      removeEventListener("scroll", updateProgress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        height: containerHeight,
        overflow: "hidden",
        position: "relative",
      }}
      ref={container}
    >
      <div
        style={{
          display: "inline-block",
          height: "100vh",
          transform:
            progress >= 0
              ? progress > 100
                ? `translateX(-${
                    (100 * (wrapperWidth - innerWidth)) / wrapperWidth
                  }%)`
                : `translateX(-${
                    progress * ((wrapperWidth - innerWidth) / wrapperWidth)
                  }%)`
              : "translateX(0%)",
          position:
            progress <= 100 ? (progress >= 0 ? "fixed" : "static") : "absolute",
          bottom: 0,
        }}
        ref={displayedWrapper}
      >
        {displayed}
      </div>
    </div>
  );
};
export default ScrollToRight;

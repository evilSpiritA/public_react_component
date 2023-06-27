import "./style.scss";
import React, { useLayoutEffect } from "react";
import { gsap, Power4 } from "gsap";
import { Observer } from "gsap/Observer";
import { c_objSort } from "@/Ryan/utils";

type T_ItemProps = {
  propsData: { index: number; bgImg: string; displayText: string }[];
  splitCols?: number;
  splitDuration?: number;
  splitEase?: gsap.EaseFunction;
  isInverted?: boolean;
  isBtn?: boolean;
  isBotDesc?: boolean;
};

gsap.registerPlugin(Observer);

const SliderSplitImage: React.FC<T_ItemProps> = ({
  propsData,
  splitCols = 3,
  splitDuration = 2.3,
  splitEase = Power4.easeInOut,
  isInverted = false,
  isBtn = true,
  isBotDesc = true,
}) => {
  propsData = c_objSort(propsData, "index");
  const parts: any = [];
  let current = 0;
  let playing = false;
  let main: any;
  const img = new Image();

  useLayoutEffect(() => {
    for (const i in propsData) {
      img.src = propsData[i].bgImg;
    }
    main = document!.getElementById("main");
    const h1 = createH1(current);
    for (let col = 0; col < splitCols; col++) {
      const part = document.createElement("div");
      part.className = "part";
      const el = document.createElement("div");
      el.className = "section";
      const img = document.createElement("img");
      img.src = propsData[current].bgImg;
      el.appendChild(img);
      part.style.setProperty("--x", (-100 / splitCols) * col + "vw");
      part.appendChild(el);

      if (main != null) {
        if (document.getElementsByClassName("part").length < splitCols) {
          main.appendChild(part);
          main.appendChild(h1);
        }
      }
      parts.push(part);
    }
    window.addEventListener("keydown", function (e) {
      if (["ArrowDown", "ArrowRight"].includes(e.key)) go(1);
      else if (["ArrowUp", "ArrowLeft"].includes(e.key)) go(-1);
    });

    Observer.create({
      type: "wheel,touch,pointer,scroll",
      wheelSpeed: -1,
      onDown: () => !playing && go(1),
      onUp: () => !playing && go(-1),
      tolerance: 10,
      preventDefault: true,
    });
  }, []);

  function go(dir: number) {
    if (!playing) {
      playing = true;
      document.getElementById("displayText")?.setAttribute("id", "rmta");
      const _rmta = document.getElementById("rmta") as HTMLHeadingElement;
      if (current + dir < 0) {
        current = propsData.length - 1;
      } else if (current + dir >= propsData.length) {
        current = 0;
      } else {
        current += dir;
      }
      const h1 = createH1(current);
      dir == 1 ? TextDown(h1, _rmta) : TextUp(h1, _rmta);
      for (const p in parts) {
        const part = parts[p];
        const next = document.createElement("div");
        next.className = "section";
        const img = document.createElement("img");
        img.src = propsData[current].bgImg;
        next.appendChild(img);
        (Number(p) - Math.max(0, dir)) % 2 == 0
          ? down(part, next)
          : up(part, next);
      }
    }
  }

  function createH1(_current: number) {
    const h1 = document.createElement("H1") as HTMLHeadingElement;
    const text = document.createTextNode(propsData[_current].displayText);
    h1.setAttribute("id", "displayText");
    if (isInverted) {
      h1.style.filter = "invert(1)";
    }
    h1.appendChild(text);
    return h1;
  }

  function TextUp(h1: HTMLHeadingElement, _rmta: HTMLHeadingElement) {
    if (main != null) main.prepend(h1);
    gsap.to(h1, { duration: 0, y: window.innerHeight });
    gsap.to(h1, { duration: splitDuration, ease: splitEase, y: 0 });
    gsap
      .to(_rmta, {
        duration: splitDuration,
        ease: splitEase,
        y: -window.innerHeight,
      })
      .then(function () {
        main.removeChild(_rmta);
      });
  }

  function TextDown(h1: HTMLHeadingElement, _rmta: HTMLHeadingElement) {
    if (main != null) main.appendChild(h1);
    gsap.to(h1, { duration: 0, y: -window.innerHeight });
    gsap.to(h1, { duration: splitDuration, ease: splitEase, y: 0 });
    gsap
      .to(_rmta, {
        duration: splitDuration,
        ease: splitEase,
        y: window.innerHeight,
      })
      .then(function () {
        main.removeChild(_rmta);
      });
  }

  function up(part: any, next: any) {
    part.appendChild(next);
    gsap
      .to(part, {
        duration: splitDuration,
        ease: splitEase,
        y: -window.innerHeight,
      })
      .then(function () {
        part.children[0].remove();
        gsap.to(part, { duration: 0, y: 0 });
      });
  }

  function down(part: any, next: any) {
    part.prepend(next);
    gsap.to(part, { duration: 0, y: -window.innerHeight });
    gsap
      .to(part, { duration: splitDuration, ease: splitEase, y: 0 })
      .then(function () {
        part.children[1].remove();
        playing = false;
      });
  }

  return (
    <>
      <div className="wrapper">
        <div id="main">
          <div className="content">
            {isBotDesc ? (
              <p>
                You can press <kbd>▲</kbd> <kbd>▼</kbd> on your keyboard or
                swipe up/down to navigate. Mouse wheel works too.
              </p>
            ) : null}
          </div>
          {isBtn ? (
            <div className="buttons">
              <button
                className="next"
                onClick={() => {
                  go(-1);
                }}
              ></button>
              <button
                className="prev"
                onClick={() => {
                  go(1);
                }}
              ></button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SliderSplitImage;

import "./style.scss";
import React, { useLayoutEffect } from 'react';
import { gsap, Power4 } from 'gsap';

type ItemProps = {
    propsData: { index: number, bgImg: string, displayText: string }[]
    splitCols?: number;
    splitDuration?: number;
    splitEase?: gsap.EaseFunction;
    isInverted?: boolean;
    isBtn?: boolean;
    isBotDesc?: boolean;
};

const SliderSplitImage: React.FC<ItemProps> = ({
    propsData, splitCols = 3, splitDuration = 2.3, splitEase = Power4.easeInOut, isInverted = false, isBtn = true, isBotDesc = true,
}) => {


    propsData = propsData.sort((a, b) => { return a.index < b.index ? -1 : a.index > b.index ? 1 : 0 });
    let parts: any = [];
    let current = 0;
    let playing = false;
    let main: any;

    useLayoutEffect(() => {
        main = document!.getElementById('main');
        for (let i in propsData) {
            new Image().src = propsData[i].bgImg;
        }
        let h1 = createH1(current);
        for (let col = 0; col < splitCols; col++) {
            let part = document.createElement('div');
            part.className = 'part';
            let el = document.createElement('div');
            el.className = "section";
            let img = document.createElement('img');
            img.src = propsData[current].bgImg;
            el.appendChild(img);
            part.style.setProperty('--x', -100 / splitCols * col + 'vw');
            part.appendChild(el);

            if (main != null) {
                if (document.getElementsByClassName('part').length < splitCols) {
                    main.appendChild(part);
                    main.appendChild(h1);
                }
            }
            parts.push(part)
        }

        window.addEventListener('keydown', function (e) {
            if (['ArrowDown', 'ArrowRight'].includes(e.key)) go(1);
            else if (['ArrowUp', 'ArrowLeft'].includes(e.key)) go(-1);
        });

        let scrollTimeout: any;
        function wheel(e: any) {
            clearTimeout(scrollTimeout);
            setTimeout(function () {
                if (e.deltaY < -40) {
                    go(-1);
                }
                else if (e.deltaY >= 40) {
                    go(1);
                }
            })
        }
        window.addEventListener('mousewheel', wheel, false);
        window.addEventListener('wheel', wheel, false);
    }, [])

    function go(dir: number) {
        if (!playing) {
            playing = true;
            document.getElementById('displayText')?.setAttribute('id', 'rmta');
            let _rmta = document.getElementById('rmta');

            if (current + dir < 0) {
                current = propsData.length - 1;
            } else if (current + dir >= propsData.length) {
                current = 0;
            } else {
                current += dir;
            }

            let h1 = createH1(current);

            function TextUp() {
                if (main != null) main.prepend(h1);
                gsap.to(h1, { duration: 0, y: window.innerHeight })
                gsap.to(h1, { duration: splitDuration, ease: splitEase, y: 0 })
                gsap.to(_rmta, { duration: splitDuration, ease: splitEase, y: -window.innerHeight })
                    .then(function () {
                        main.removeChild(_rmta);
                    })
            }

            function TextDown() {
                if (main != null) main.appendChild(h1);
                gsap.to(h1, { duration: 0, y: -window.innerHeight });
                gsap.to(h1, { duration: splitDuration, ease: splitEase, y: 0 })
                gsap.to(_rmta, { duration: splitDuration, ease: splitEase, y: window.innerHeight })
                    .then(function () {
                        main.removeChild(_rmta);
                    })
            }

            function up(part: any, next: any) {
                part.appendChild(next);
                gsap.to(part, { duration: splitDuration, ease: splitEase, y: -window.innerHeight })
                    .then(function () {
                        part.children[0].remove();
                        gsap.to(part, { duration: 0, y: 0 });
                    })
            }

            function down(part: any, next: any) {
                part.prepend(next);
                gsap.to(part, { duration: 0, y: -window.innerHeight });
                gsap.to(part, { duration: splitDuration, ease: splitEase, y: 0 })
                    .then(function () {
                        part.children[1].remove();
                        playing = false;
                    })
            }

            dir == 1 ? TextDown() : TextUp();
            for (let p in parts) {
                let part = parts[p];
                let next = document.createElement('div');
                next.className = 'section';
                let img = document.createElement('img');
                img.src = propsData[current].bgImg;
                next.appendChild(img);
                (Number(p) - Math.max(0, dir)) % 2 == 0 ? down(part, next) : up(part, next);
            }

        }
    }

    function createH1(_current: number) {
        var h1 = document.createElement("H1");
        var text = document.createTextNode(propsData[_current].displayText);
        h1.setAttribute('id', 'displayText');
        if (isInverted) {
            h1.style.filter = "invert(1)";
        }
        h1.appendChild(text);
        return h1;
    }


    return (
        <>
            <div className="wrapper">
                <div id="main">
                    <div className="content">
                        {
                            isBotDesc ?
                                <p>You can press <kbd>▲</kbd> <kbd>▼</kbd> on your keyboard or swipe up/down to navigate. Mouse wheel works too.</p>
                                : null
                        }
                    </div>
                    {
                        isBtn ?
                            <div className="buttons">
                                <button className="next" onClick={() => { go(-1) }}></button>
                                <button className="prev" onClick={() => { go(1) }}></button>
                            </div> : null
                    }

                </div>
            </div>
        </>
    );

};


export default SliderSplitImage;

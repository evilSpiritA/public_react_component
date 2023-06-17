import "./style.scss";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { useLayoutEffect } from "react";
import SplitType from 'split-type'

type ItemProps = {
    propsData: { index: number, bgImg: string, displayText: string }[];
};

gsap.registerPlugin(Observer);

const SliderContinuous: React.FC<ItemProps> = ({ propsData }) => {
    propsData = propsData.sort((a, b) => { return a.index < b.index ? -1 : a.index > b.index ? 1 : 0 });

    let _tmp = propsData.map(ele => {
        return (
            <section key={ele.index}>
                <div className="outer">
                    <div className="inner">
                        <div className="bg" style={{
                            backgroundImage: `url(${ele.bgImg})`
                        }}>
                            <h2 className="section-heading" >{ele.displayText}</h2>
                        </div>
                    </div>
                </div>
            </section>
        )
    });

    // gsap animation
    useLayoutEffect(() => {
        let sections = document.querySelectorAll("section"),
            images = document.querySelectorAll(".bg"),
            headings = gsap.utils.toArray(".section-heading"),
            outerWrappers = gsap.utils.toArray(".outer"),
            innerWrappers = gsap.utils.toArray(".inner"),
            splitHeadings: any = headings.map((heading: any) => new SplitType(heading, { types: 'words, chars', lineClass: "clip-text" })),
            currentIndex = -1,
            wrap = gsap.utils.wrap(0, sections.length),
            animating: any;


        gsap.set(outerWrappers, { yPercent: 100 });
        gsap.set(innerWrappers, { yPercent: -100 });

        function gotoSection(index: any, direction: any) {
            index = wrap(index); // make sure it's valid

            animating = true;
            let fromTop = direction === -1,
                dFactor = fromTop ? -1 : 1,
                tl = gsap.timeline({
                    defaults: { duration: 1.25, ease: "power1.inOut" },
                    onComplete: () => { animating = false }
                });
            if (currentIndex >= 0) {
                // The first time this function runs, current is -1
                gsap.set(sections[currentIndex], { zIndex: 0 });
                tl.to(images[currentIndex], { yPercent: -15 * dFactor })
                    .set(sections[currentIndex], { autoAlpha: 0 });
            }
            gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
            tl.fromTo([outerWrappers[index], innerWrappers[index]], {
                yPercent: (i) => i ? -100 * dFactor : 100 * dFactor
            }, {
                yPercent: 0
            }, 0)
                .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
                .fromTo(splitHeadings[index].chars, {
                    autoAlpha: 0,
                    yPercent: 150 * dFactor
                }, {
                    autoAlpha: 1,
                    yPercent: 0,
                    duration: 1,
                    ease: "power2",
                    stagger: {
                        each: 0.02,
                        from: "random"
                    }
                }, 0.2);

            currentIndex = index;
        }

        Observer.create({
            type: "wheel,touch,pointer",
            wheelSpeed: -1,
            onDown: () => !animating && gotoSection(currentIndex - 1, -1),
            onUp: () => !animating && gotoSection(currentIndex + 1, 1),
            tolerance: 10,
            preventDefault: true
        });

        gotoSection(0, 1);
    }, [propsData])


    return (
        <>
            <div className="sliderContinuousWrapper">
                {
                    _tmp || <section>
                        <div className="outer">
                            <div className="inner">
                                <div className="bg">
                                    <h2 className="section-heading" >null</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                }
            </div>

        </>
    )
}


export default SliderContinuous;
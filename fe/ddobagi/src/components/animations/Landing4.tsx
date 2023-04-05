import React, { useEffect, useRef } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';
import animationData from './Landing4.json';

const Landing4Animation = () => {
    const Container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let instance: AnimationItem | undefined;

        if (Container.current) {
            instance = Lottie.loadAnimation({
                container: Container.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationData,
            });
            // viewBox 속성을 조절합니다.
            const svgElement = Container.current.querySelector("svg");
            svgElement?.setAttribute("viewBox", "330 300 650 160");
        }

        return () => {
            if (instance) {
                instance.destroy();
            }
        };
    }, []);

    return (
        <div style={{ width: "570px", height: "420px"}}>
            <div ref={Container} style={{ width: "100%", height: "100%" }}></div>
        </div>);
};

export default Landing4Animation;
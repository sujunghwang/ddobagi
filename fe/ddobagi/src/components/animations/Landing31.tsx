import React, { useEffect, useRef } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';
import animationData from './Landing31.json';

const Landing31Animation = () => {
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
        }

        return () => {
            if (instance) {
                instance.destroy();
            }
        };
    }, []);

    return (
        <div style={{ width: "260px", height: "240px", marginTop:"2rem" }}>
            <div ref={Container} style={{ width: "100%", height: "100%" }}></div>
        </div>);
};

export default Landing31Animation;
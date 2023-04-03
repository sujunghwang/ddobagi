import React, { useEffect, useRef } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';
import animationData from './Correct.json';

const CorrectAnimation = () => {
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
        <div style={{ width: "300px", height: "300px" }}>
            <div ref={Container} style={{ width: "100%", height: "100%" }}></div>
        </div>);
};

export default CorrectAnimation;
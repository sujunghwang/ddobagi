import React, { useEffect, useRef } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';
import animationData from './Nodata.json';

const NodataAnimation = () => {
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
        <div style={{ width: "240px", height: "250px"}}>
            <div ref={Container} style={{ width: "100%", height: "100%" }}></div>
        </div>);
};

export default NodataAnimation;
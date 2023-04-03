import React, { useEffect, useRef, useState } from "react";
import Lottie, { AnimationItem } from "lottie-web";
import animationData from "./News.json";

const NewsAnimation = () => {
  const Container = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let instance: AnimationItem | undefined;

    if (Container.current) {
      instance = Lottie.loadAnimation({
        container: Container.current,
        renderer: "svg",
        loop: isHovered,
        autoplay: true,
        animationData: animationData,
      });
    }

    return () => {
      if (instance) {
        instance.destroy();
      }
    };
  }, [isHovered]);

  return (
    <div
      style={{ width: "140px", height: "140px" }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={Container} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default NewsAnimation;

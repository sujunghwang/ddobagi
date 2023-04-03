import React, { useEffect, useRef } from "react";
import Lottie, { AnimationItem } from "lottie-web";
import animationData from "./Conversation.json";

const ConversationAnimation = () => {
  const Container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let instance: AnimationItem | undefined;

    if (Container.current) {
      instance = Lottie.loadAnimation({
        container: Container.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: animationData,
      });
      // viewBox 속성을 조절합니다.
      const svgElement = Container.current.querySelector("svg");
      svgElement?.setAttribute("viewBox", "50 300 680 10");
    }

    return () => {
      if (instance) {
        instance.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: "280px", height: "300px" }}>
      <div ref={Container} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default ConversationAnimation;

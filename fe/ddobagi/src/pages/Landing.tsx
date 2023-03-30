import * as FullpageModule from '@ap.cx/react-fullpage';
import React, { useEffect, useRef } from "react";
import styles from "./CategoryList.module.scss";
import MainOne from "../components/FullPage/MainOne";
import MainTwo from "../components/FullPage/MainTwo";
import MainThree from "../components/FullPage/MainThree";
import MainFour from "../components/FullPage/MainFour";
import MainFive from "../components/FullPage/MainFive";

function Landing() {
  const ref = useRef<FullpageModule.Fullpage>(null)

  useEffect(() => {
    document.body.classList.add(styles.Noscroll);
    return () => {
      document.body.classList.remove(styles.Noscroll);
      ref.current?.destroy()
    };
  }, []);

  return (
    <FullpageModule.Fullpage ref={ref}>
      <FullpageModule.FullPageSections>
        <FullpageModule.FullpageSection>
          <MainOne />
        </FullpageModule.FullpageSection>
        <FullpageModule.FullpageSection>
          <MainTwo />
        </FullpageModule.FullpageSection>
        <FullpageModule.FullpageSection>
          <MainThree />
        </FullpageModule.FullpageSection>
        <FullpageModule.FullpageSection>
          <MainFour />
        </FullpageModule.FullpageSection>
        <FullpageModule.FullpageSection>
          <MainFive />
        </FullpageModule.FullpageSection>
      </FullpageModule.FullPageSections>
    </FullpageModule.Fullpage>
  );
}

export default Landing;

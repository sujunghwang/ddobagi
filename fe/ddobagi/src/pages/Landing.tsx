import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import React, { useEffect } from "react";
import styles from "./CategoryList.module.scss";
import MainOne from "../components/FullPage/MainOne";
import MainTwo from "../components/FullPage/MainTwo";
import MainThree from "../components/FullPage/MainThree";
import MainFour from "../components/FullPage/MainFour";
import MainFive from "../components/FullPage/MainFive";

function Landing() {
  useEffect(() => {
    document.body.classList.add(styles.Noscroll);
    return () => {
      document.body.classList.remove(styles.Noscroll);
    };
  }, []);
  return (
    // @ts-ignore
    <Fullpage>
      <FullPageSections>
        <FullpageSection>
          <MainOne />
        </FullpageSection>
        <FullpageSection>
          <MainTwo />
        </FullpageSection>
        <FullpageSection>
          <MainThree />
        </FullpageSection>
        <FullpageSection>
          <MainFour />
        </FullpageSection>
        <FullpageSection>
          <MainFive />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}

export default Landing;

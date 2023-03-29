import React, { useRef } from 'react';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import MainOne from '../components/FullPage/MainOne';
import MainTwo from '../components/FullPage/MainTwo';
import MainThree from '../components/FullPage/MainThree';
import MainFour from '../components/FullPage/MainFour';
import MainFive from '../components/FullPage/MainFive';

function Landing() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleAfterLoad = (origin: any, destination: any, direction: any) => {
    if (sectionRef.current) {
      const sectionHeight = sectionRef.current.clientHeight;
      // 참조할 DOM 요소가 있으면 해당 요소를 이용한 로직을 실행
    }
  };

  return (
    <div data-section="1" ref={sectionRef}>
      {/* @ts-ignore */}
      <Fullpage afterLoad={handleAfterLoad}
      >
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

    </div>
  )
}

export default Landing;
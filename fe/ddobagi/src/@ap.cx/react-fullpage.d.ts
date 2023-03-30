  declare module '@ap.cx/react-fullpage' {
    interface FullpageProps {
      resetSlides?: boolean;
      wrapperId?: string;
      children: React.ReactNode;
      controls?: boolean;
      controlsProps?: {
        nextText?: string;
        prevText?: string;
      };
      scrollingSpeed?: number;
      onSlideChangeStart?: (destination: number, curState: any, prevState: any) => void;
      onSlideChangeEnd?: (destination: number, curState: any, prevState: any) => void;
    }

    class Fullpage extends React.Component<FullpageProps, any> {
      moveSectionDown(): void;
      moveSectionUp(): void;
      moveTo(section: number): void;
      destroy(): void;
    }

    interface FullpageSectionProps {
      children: React.ReactNode;
    }

    class FullpageSection extends React.Component<FullpageSectionProps, any> { }
    class FullPageSections extends React.Component<any, any> { }

    export { Fullpage, FullPageSections, FullpageSection, FullpageProps };
  }

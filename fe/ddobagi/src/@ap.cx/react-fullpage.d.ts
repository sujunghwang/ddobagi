declare module '@ap.cx/react-fullpage' {
  interface SectionProps {
    children?: React.ReactNode;
    className?: string;
    fullpageApi?: FullpageApi;
  }

  interface FullpageProps {
    licenseKey?: string;
    scrollingSpeed?: number;
    navigation?: boolean;
    navigationPosition?: 'left' | 'right';
    navigationTooltips?: string[];
    showActiveTooltip?: boolean;
    slidesNavigation?: boolean;
    slidesNavPosition?: 'top' | 'bottom';
    controlArrows?: boolean;
    verticalCentered?: boolean;
    resize?: boolean;
    responsiveWidth?: number;
    responsiveHeight?: number;
    afterLoad?(origin: Origin, destination: Destination): void;
    onLeave?(origin: Origin, destination: Destination, direction: 'up' | 'down'): void;
    render?(comp: React.ComponentType<any>): React.ReactNode;
  }

  interface FullpageApi {
    moveSectionUp(): void;
    moveSectionDown(): void;
    moveTo(section: number, slide?: number): void;
    moveSlideRight(): void;
    moveSlideLeft(): void;
  }
  
  // const Fullpage: React.FC<FullpageProps> & { Section: React.FC<SectionProps> };
  
  // export { Fullpage };
  const Fullpage: React.FC<FullpageProps> & {
    Section: React.FC<SectionProps>;
    defaultProps: Partial<FullpageProps>;
  };

  const FullPageSections: React.FC<any>;
  const FullpageSection: React.FC<any>;

  export { Fullpage, FullPageSections, FullpageSection };
}

declare module 'react-vertical-timeline-component' {
  import { ComponentType, ReactNode } from 'react';

  export interface VerticalTimelineProps {
    children?: ReactNode;
    className?: string;
    layout?: '1-column' | '2-columns';
    animate?: boolean;
  }

  export interface VerticalTimelineElementProps {
    children?: ReactNode;
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    iconStyle?: React.CSSProperties;
    icon?: ReactNode;
    iconClassName?: string;
    position?: 'left' | 'right';
    visible?: boolean;
  }

  export const VerticalTimeline: ComponentType<VerticalTimelineProps>;
  export const VerticalTimelineElement: ComponentType<VerticalTimelineElementProps>;
}
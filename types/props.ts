import { ComponentPropsWithoutRef, HTMLAttributes } from "react";

export interface BrickBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  patternColor?: string;
  backgroundColor?: string;
  maskColor?: string;
  className?: string;
  style?: React.CSSProperties;
  fade?: boolean;
}

export interface ChangingBackgroundProps extends ComponentPropsWithoutRef<"div"> {
  animated?: boolean;
  gradientClassName?: string;
}

export interface ZigzagBackgroundProps {
  bgColor?: string;
  lineColor?: string;
  size?: number;
  children?: React.ReactNode;
  className?: string;
}

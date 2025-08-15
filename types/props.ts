import { ComponentPropsWithoutRef } from "react";

export interface ChangingBackgroundProps extends ComponentPropsWithoutRef<"div"> {
  animated?: boolean;
  gradientClassName?: string;
}

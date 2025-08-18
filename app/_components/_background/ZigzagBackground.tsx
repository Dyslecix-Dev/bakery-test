import { cn } from "@/lib/utils";

import { ZigzagBackgroundProps } from "@/types/props";

export default function ZigzagBackground({ bgColor = "#fddce0", lineColor = "#764549", size = 10, children, className }: ZigzagBackgroundProps) {
  return (
    <section className={cn("w-full relative bg-background", className)}>
      <div
        key={`zigzag-${bgColor}-${size}`}
        style={{
          background: `linear-gradient(135deg, ${bgColor} 25%, transparent 60%) -${size}px 0,
          linear-gradient(225deg, ${bgColor} 25%, transparent 60%) -${size}px 0,
          linear-gradient(315deg, ${bgColor} 25%, transparent 60%),
          linear-gradient(45deg, ${bgColor} 25%, transparent 60%)`,
          backgroundColor: lineColor,
          backgroundSize: `calc(2 * ${size}px) calc(2 * ${size}px)`,
        }}
      >
        {children}
      </div>
    </section>
  );
}

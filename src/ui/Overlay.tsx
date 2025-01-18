import { PropsWithChildren, CSSProperties } from "react";

import "./Overlay.css";

interface CustomCSSProperties extends CSSProperties {
  "--index": number;
}

export function Overlay(
  props: PropsWithChildren<{ item: string; index: number }>
) {
  const { item, index, children } = props;

  return (
    <div
      className="overlay"
      style={
        {
          "--index": index,
          viewTransitionName: `_${item}`,
          opacity: index > 2 ? 0 : 1 - index * 0.1,
        } as CustomCSSProperties
      }
    >
      {children}
    </div>
  );
}

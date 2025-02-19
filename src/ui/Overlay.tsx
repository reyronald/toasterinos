import { PropsWithChildren, CSSProperties } from "react";

import "./Overlay.css";

interface CustomCSSProperties extends CSSProperties {
  "--index": number;
  "--opacity": number;
}

export function Overlay(
  props: PropsWithChildren<{ id: string; index: number }>
) {
  const { id, index, children } = props;

  return (
    <div
      className="overlay"
      style={
        {
          "--index": index,
          "--opacity": index > 2 ? 0 : 1,
          viewTransitionName: id,
        } as CustomCSSProperties
      }
    >
      {children}
    </div>
  );
}

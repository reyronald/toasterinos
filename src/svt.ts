import { flushSync } from "react-dom";

export function svt(cb: VoidFunction) {
  return document.startViewTransition(() => {
    flushSync(() => {
      cb();
    });
  });
}

import { PropsWithChildren } from "react";

export function ToasterCard(props: PropsWithChildren) {
  return (
    <div className=" bg-slate-500 shadow-md rounded-lg p-4">
      {props.children}
    </div>
  );
}

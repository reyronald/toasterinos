import { PropsWithChildren } from "react";

export function ToasterCard(props: PropsWithChildren) {
  return (
    <div className="bg-black shadow-md rounded-lg px-8 py-4 text-3xl border-2 border-slate-400 flex justify-around gap-8 items-center">
      {props.children}
    </div>
  );
}

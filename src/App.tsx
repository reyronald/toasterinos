import { useState } from "react";
import { Portal } from "@reach/portal";
import { ToasterCard } from "./ui/ToasterCard";
import { Overlay } from "./ui/Overlay";
import { svt } from "./svt";

import "./App.css";

function App() {
  const [items, setItems] = useState<
    Array<{
      id: string;
      message: string;
    }>
  >([]);

  return (
    <>
      <h1>Toasterinos</h1>

      <div className="card">
        <button
          onClick={() =>
            svt(() =>
              setItems((prevItems) =>
                prevItems.concat({
                  id: "_" + Math.random().toString(36).slice(2),
                  message: `${prevItems.length + 1}) This is a notification`,
                })
              )
            )
          }
        >
          Add Toasterino
        </button>

        <button onClick={() => setItems([])}>Reset</button>
      </div>

      <Portal type="toasterino-portal">
        <div className="">
          {items
            .slice()
            .reverse()
            .map((item, index) => (
              <Overlay key={item.id} id={item.id} index={index}>
                <ToasterCard>
                  <span>{item.message}</span>

                  <button
                    className="bg-white hover:bg-slate-200 text-black font-bold p-2 rounded ml-4"
                    aria-label="Close"
                    onClick={() =>
                      svt(() =>
                        setItems((prevItems) =>
                          prevItems.filter((prevItem) => prevItem !== item)
                        )
                      )
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </ToasterCard>
              </Overlay>
            ))
            .reverse()}
        </div>
      </Portal>
    </>
  );
}

export default App;

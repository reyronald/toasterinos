import { useRef, useState } from "react";
import { Portal } from "@reach/portal";
import { ToasterCard } from "./ui/ToasterCard";
import { Overlay } from "./ui/Overlay";
import { svt } from "./svt";

function App() {
  const [items, setItems] = useState<
    Array<{
      id: string;
      message: string;
    }>
  >([]);

  const counter = useRef(0);

  const elRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="space-y-8">
      <h1>Toasterinos</h1>

      <h2>
        <a href="https://github.com/reyronald/toasterinos">
          https://github.com/reyronald/toasterinos
        </a>
      </h2>

      <div className="space-x-4">
        <button
          onClick={() =>
            svt(() => {
              counter.current++;
              setItems((prevItems) =>
                prevItems.concat({
                  id: "_" + Math.random().toString(36).slice(2),
                  message: `${counter.current}) This is a notification`,
                })
              );
            })
          }
        >
          Add Toasterino
        </button>

        <button
          onClick={() =>
            svt(() => {
              counter.current = 0;
              setItems([]);
            })
          }
        >
          Reset
        </button>
      </div>

      <div className="space-y-4">
        <p>
          Inspired by <a href="https://sonner.emilkowal.ski/">Sonner</a>.
        </p>

        <p>
          Animations implemented purely with CSS and the View Transitions API.
        </p>

        <p>No dependencies.</p>

        <p>
          - <a href="https://github.com/reyronald">Ronald Rey (@reyronald)</a>
        </p>
      </div>

      {items.length > 0 && (
        <Portal type="toasterino-portal">
          <div ref={elRef} className="overlay-container">
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
                      onClick={async () => {
                        elRef.current?.setAttribute("data-removing", "true");

                        const viewTransition = svt(() =>
                          setItems((prevItems) =>
                            prevItems.filter((prevItem) => prevItem !== item)
                          )
                        );

                        await viewTransition.finished;

                        elRef.current?.removeAttribute("data-removing");
                      }}
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
      )}
    </main>
  );
}

export default App;

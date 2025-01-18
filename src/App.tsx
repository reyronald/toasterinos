import { useState } from "react";
import { ToasterCard } from "./ui/ToasterCard";
import { Overlay } from "./ui/Overlay";
import { flushSync } from "react-dom";
import "./App.css";

function App() {
  const [items, setItems] = useState<string[]>([]);

  return (
    <>
      <h1>Toasterinos</h1>

      <div className="card">
        <button
          onClick={() =>
            document.startViewTransition(() =>
              flushSync(() =>
                setItems((prevItems) =>
                  prevItems.concat(
                    "_" +
                      (prevItems.length + 1).toString() +
                      "_" +
                      Math.random().toString(36).slice(2)
                  )
                )
              )
            )
          }
        >
          Add Toasterino
        </button>

        <button onClick={() => setItems([])}>Reset</button>
      </div>

      <div className="">
        {items
          .slice()
          .reverse()
          .map((item, index) => (
            <Overlay key={item} item={item} index={index}>
              <ToasterCard>{item}</ToasterCard>
            </Overlay>
          ))
          .reverse()}
      </div>
    </>
  );
}

export default App;

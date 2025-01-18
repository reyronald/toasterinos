import { useState } from "react";
import { ToasterCard } from "./ui/ToasterCard";
import "./App.css";

function App() {
  const [items, setItems] = useState<string[]>([]);

  return (
    <>
      <h1>Toasterinos</h1>

      <div className="card">
        <button
          onClick={() =>
            setItems((prevItems) =>
              prevItems.slice().concat(Math.random().toString(36).slice(2))
            )
          }
        >
          Add Toasterino
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <ToasterCard key={item}>{item}</ToasterCard>
        ))}
      </div>
    </>
  );
}

export default App;

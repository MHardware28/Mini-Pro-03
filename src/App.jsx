import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  // Add new item
  function addItem() {
    if (input.trim() === "") return;

    const newItem = {
      name: input,
      quantity: 1,
    };

    setItems([...items, newItem]);
    setInput("");
  }

  // Remove item completely
  function removeItem(index) {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  }

  // Increase quantity
  function increment(index) {
    const updated = [...items];
    updated[index].quantity += 1;
    setItems(updated);
  }

  // Decrease quantity
  function decrement(index) {
    const updated = [...items];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setItems(updated);
    }
  }

  return (
    <div className="app">
      <h1>Hardware's Grocery List</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter grocery item..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              position: "relative",
              padding: "10px 40px 10px 10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <strong>{item.name}</strong>

            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                onClick={() => decrement(index)}
                style={{
                  fontSize: "10px",
                  padding: "2px 6px",
                  marginRight: "8px",
                }}
              >
                −
              </button>

              <span style={{ margin: "0 5px" }}>{item.quantity}</span>

              <button
                onClick={() => increment(index)}
                style={{
                  fontSize: "10px",
                  padding: "2px 6px",
                  marginLeft: "8px",
                }}
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(index)}
              style={{
                position: "absolute",
                top: "0px",
                right: "5px",
                border: "none",
                background: "transparent",
                color: "#050303",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


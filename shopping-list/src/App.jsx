import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [itemList, setItemList] = useState([]);
  function addItem(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItem = [...itemList, input.value];
    setItemList(newItem);
    form.reset();
  }

  function removeItem(itemToremove) {
    const newItem = itemList.filter((item) => item !== itemToremove);
    setItemList(newItem);
  }

  return (
    <div className="shopping-list">
      <h1>Shopping List</h1>
      <div className="input">
        <h2>Item to Buy </h2>

        <form className="form" onSubmit={addItem}>
          <input
            type="text"
            name="item"
            placeholder="Add a new item"
            required
          />
          <button>Add</button>
        </form>
        <br />
      </div>
      <ul>
        {itemList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(item)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

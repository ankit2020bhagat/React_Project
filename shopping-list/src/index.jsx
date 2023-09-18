import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [item, setItem] = useState(null);
  const [itemList, setItemList] = useState([]);
  function addItem() {
    if (item) {
      const newItem = [...itemList, item];
      setItemList(newItem);
      setItem("");
    }
  }
  function getList() {
    console.log(itemList);
  }

  return (
    <div className="shopping-list">
      <h1>Shopping List</h1>
      <div className="input">
        <h2>Item to Buy </h2>
        <input
          type="text"
          placeholder="Add Item"
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={addItem}>add</button>
        <br />
        <button onClick={getList}> getlist</button>
      </div>
    </div>
  );
};

export default App;

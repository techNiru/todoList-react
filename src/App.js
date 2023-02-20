import React, { useState } from "react";
import ToDoList from "./ToDoList";
const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  // button
  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  // delete items onclick(todolist)
  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List </h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItem}> + </button>
          <ol>
            {/* <li>{inputList}</li> */}
            {/* using map for items (value & key value and id ) */}

            {Items.map((itemVal, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;

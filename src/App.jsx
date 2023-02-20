import React from "react";

const App = () => {
    return (
    <>
    <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List </h1>  
          <br/>
          <input type="text" placeholder="Add a Items" />
        <button> + </button>
        <ol>
            <li>Buy a apple</li>
        </ol>
        </div>
    </div>
        </>
    )
};

export default App;
import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Routing"


// ReactDOM.render(<Home/>,document.getElementById('root'));
const container = document.getElementById('root');

// Create a root
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
      <Routing/>
    </React.StrictMode>
    );

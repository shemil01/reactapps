import React, { createContext, useState } from "react";
import Component1 from "./component1";
import useCustum from "./custum";

export const userContext = createContext();
const Usecontext = () => {
  const [counter, setCounter] = useState(0);
  useCustum(counter)
  return (
    <div>
      <userContext.Provider value={{ counter, setCounter }}>
        <Component1 />
      </userContext.Provider>
    </div>
  );
};

export default Usecontext;

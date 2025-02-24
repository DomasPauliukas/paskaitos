// issikeliame context i atskira folderi kaip komponenta.

import { createContext, useState } from "react";

export const testContext = createContext();

const ContextExampleProvider = ({ children }) => {
  //   const { children } = props;

  const [activities, setActivities] = useState([]);

  const addItem = (text) => {
    setActivities((prevState) => [text, ...prevState]);
  };

  const removeItem = (index) => {
    setActivities((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  };

  const data = {
    title: "Hello",
    name: "John",
    surname: "Doe",
    age: 25,
    activities,
    addItem,
    removeItem,
  };

  return <testContext.Provider value={data}>{children}</testContext.Provider>;
};

export default ContextExampleProvider;

// issikeliame context i atskira folderi kaip komponenta.

import { createContext, ReactNode, useState } from "react";

type TestContextType = {
  title: string
  name: string
  surname: string
  age: number
  activities: string[]
  addItem: (text: string) => void
  removeItem: (index: number) => void
}

export const testContext = createContext<TestContextType>({
  title: '',
  name: '',
  surname: '',
  age: 0,
  activities: [],
  addItem: () => {},
  removeItem: () => {}
});

type ContextExampleProviderProps = {
  children: ReactNode
}

const ContextExampleProvider: React.FC<ContextExampleProviderProps> = ({ children }) => {
  //   const { children } = props;

  const [activities, setActivities] = useState<string[]>([]);

  const addItem = (text: string) => {
    setActivities((prevState) => [text, ...prevState]);
  };

  const removeItem = (index: number) => {
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

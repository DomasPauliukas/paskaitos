// issikeliame context i atskira folderi kaip komponenta.

import { createContext, ReactNode, useContext, useState } from "react";

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

export const ContextExampleProvider: React.FC<ContextExampleProviderProps> = ({ children }) => {
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

export const useContextExample = () => {
  const ctx = useContext(testContext)

  if (!ctx) {
    throw new Error('UseContextExample cannot be used outside the testContext.Provider')
  }
}

// TIKRINIMAS. tai sukuriam dar nauja funkcija, cts = context trumpinys, ir cia patikriname realiai ta pati ka sekanciame faile, tiesiog is karto cia.
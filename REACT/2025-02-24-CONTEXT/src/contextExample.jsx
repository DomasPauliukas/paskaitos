import { createContext } from "react";
import Component1 from "./components/component1";

export const testContext = createContext();

function ContextExample() {
  const data = {
    title: "Hello",
    name: "John",
    surname: "Doe",
    age: 25,
    activities: ["watersports", "cycling", "shooting"],
  };

  return (
    <>
      <h1>hello</h1>

      <testContext.Provider value={data}>
        <Component1 />
      </testContext.Provider>
    </>
  );
}
export default ContextExample;

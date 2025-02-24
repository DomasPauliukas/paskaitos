import { useContext } from "react";
import { testContext } from "../contextExample";

function Component3() {
  const { title, name, surname, age, activities } = useContext(testContext);

  return (
    <>
      <h1>hi 3</h1>;
      <p>
        my name is {name} {surname}
      </p>
    </>
  );
}
export default Component3;

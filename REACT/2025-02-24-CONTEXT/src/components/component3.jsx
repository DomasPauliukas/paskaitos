import { useContext } from "react";
import { testContext } from "./contextProvider";

function Component3() {
  const { title, name, surname, age, activities, removeItem } =
    useContext(testContext);

  const DeleteHandler = (event) => removeItem(event.target.value);

  return (
    <>
      <h1>hi 3</h1>;
      <p>
        my name is {name} {surname}
      </p>
      <ul>
        {activities.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button value={index} onClick={DeleteHandler}>
              remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Component3;

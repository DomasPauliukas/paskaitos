import { useContext } from "react";
import { testContext } from "./contextProvider";
import { Button } from "@mui/material";

function Component3() {
  const { title, name, surname, age, activities, removeItem } =
    useContext(testContext);

  const DeleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => removeItem(Number((event.target as HTMLButtonElement).value));

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
            <Button size="small" color="error" variant="outlined" value={index} onClick={DeleteHandler}>
              remove
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Component3;

import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { testContext } from "./contextProvider";

function ContextForm() {
  const { addItem } = useContext(testContext);
  const [activity, setActivity] = useState("");

  const ActivityHandler = (event: ChangeEvent<HTMLInputElement>) => setActivity(event.target.value);

  const formHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log("heyyyyyyyyyy");

     addItem(activity);
  };
  return (
    <div>
      <h1>Add activity</h1>

      <form onSubmit={formHandler}>
        <label htmlFor="activity">New activity: </label>
        <input
          type="text"
          name="activity"
          id="activity"
          onChange={ActivityHandler}
          value={activity}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default ContextForm;

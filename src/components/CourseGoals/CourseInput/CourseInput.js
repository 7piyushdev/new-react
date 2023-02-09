import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsVallid] = useState(true);
  const [ButtonColor, setButtonColor] = useState({});

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsVallid(true);
      setButtonColor({ Background: "red" });
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsVallid(false);
      setButtonColor({ Background: "black" });
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "black",
            backgroundColor: !isValid ? "danger" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button style={ButtonColor} type="submit">
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;

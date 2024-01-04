import React from "react";
import Part from "./Part";

const Content = (props) => {
  console.log("props", props.parts[0].name);
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
    </div>
  );
};

export default Content;

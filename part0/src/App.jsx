import React from "react";
import Header from "./Header";
import Content from "./Content";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      {/* <Total
        total={parts[0].exercises + part[1].exercises + part[2].exercises}
  />*/}
    </div>
  );
};

export default App;

//do total on your own

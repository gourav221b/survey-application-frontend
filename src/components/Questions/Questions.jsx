import React from "react";
import "./Questions.css";

const TextInput = (props) => {
  return (
    <section className="questionBox">
      <label htmlFor={props?.questionTitle}></label>
      <input
        type="text"
        placeholder={
          props?.placeholder ? props?.placeholder : "Enter your Answer"
        }
      />
    </section>
  );
};

const LinearScaleInput = (props) => {
  return (
    <section className="questionBox">
      <label htmlFor={props?.questionTitle}></label>
      Linear Scale Input
    </section>
  );
};

const MCQ = (props) => {
  return (
    <section className="questionBox">
      <label htmlFor={props?.questionTitle}></label>
      {props?.questionOptions.map((option) => (
        <input />
      ))}
    </section>
  );
};

const Questions = () => {
  return <div>Questions</div>;
};

export default Questions;

import React from "react";

const Renderquotes = (props) => {
  console.log(props);
  return (
    <div>
      <div>Renderquotes</div>
      <h1>{props.message}</h1>
    </div>
  );
};

export default Renderquotes;

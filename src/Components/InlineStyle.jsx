import React from "react";

const containerStyle = {
  border: "solid 2px  #392eff",
  borderRadus: "20px",
  padinng: "8px",
  margin: "8px",
  display: "flex",
  justifyContent: "space-around",
  aligItems: "center"
};

const titleStyle = {
  margin: 0,
  color: "#3d84a8"
};

const buttonStyle = {
  backgroundcolor: "#abedd8",
  border: "none",
  padding: "8px",
  borderRadius: "8px"
};

export const InlineStyle = () => {
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>--Inline Styles --</p>
      <button style={buttonStyle}>Fight!</button>
    </div>
  );
};

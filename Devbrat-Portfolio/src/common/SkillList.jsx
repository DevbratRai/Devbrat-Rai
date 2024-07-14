import React from "react";

function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="" srcset="" />
      <h3>{skill}</h3>
    </span>
  );
}

export default SkillList;

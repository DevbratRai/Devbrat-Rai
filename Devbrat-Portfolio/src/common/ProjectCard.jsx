import React from "react";

function ProjectCard({ src, Link, h3, p }) {
  return (
    <a href={Link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;

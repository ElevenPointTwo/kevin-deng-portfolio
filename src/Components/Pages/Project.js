import React from 'react';
import './Project.css';

function Project(props) {

  // Defining different styles for engineering, programming and community projects. Because just one type for everything would be boring, and I'm not boring. 
  if (props.type === "Eng") {
    // Defining styles using an object because we can't access props in the CSS stylesheet.
    const projectStyle = {
      color: props.color,
      background: "white",
      display: "flex",
      width: "700px",
      padding: "20px",
      marginBottom: "30px",
      borderRadius: "12px",
      boxShadow: "3px 3px 10px rgba(0, 0, 0, 60)"
    }

    return (
      <div style={projectStyle}>
        <div className="project-information">
          <div className="project-details">
            <div className="project-title">{props.title}</div>
            <div className="project-description">{props.description}</div>
          </div>

          <div className="project-picture">
            <img src={props.image} alt={props.title} width={props.width} height={props.height} border={"5px solid"} />
          </div>
        </div>
      </div>
    );
  }
  else if (props.type === "Com") {
    const projectStyle = {
      color: "rgb(0, 93, 40)",
      background: "white",
      display: "flex",
      width: "900px",
      padding: "20px",
      marginBottom: "30px",
      borderRadius: "12px",
      boxShadow: "3px 3px 10px rgba(0, 0, 0, 60)"
    }

    return (
      <div style={projectStyle}>
        <div className="community-project-information">
          <div className="community-project-title">{props.title}</div>

          <div>
            <img src={props.image} alt={props.title} width={props.width} height={props.height} style={{ "border-radius": "12px", "margin-bottom": "20px" }} />
          </div>

          <div className="community-project-description">{props.description}</div>
        </div>
      </div>

    );
  }
  else {
    const projectStyle = {
      color: "rgb(0, 93, 40)",
      background: "white",
      flex: 1, 
      display: "flex",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "3px 3px 10px rgba(0, 0, 0, 60)"
    }

    return (
      <div className="coding-project">
        <div className="coding-project-information">
        <div>
          <img src={props.image} alt={props.title} width={props.width} height={props.height} style={{ "border-radius": "16px", "object-fit": "cover", "object-position": "center"}} />
        </div>

        <div style={projectStyle}>
          <div className="coding-project-details">
            <a href={props.link} target="_blank"><div className="coding-project-title">{props.title}</div></a>
            <div className="coding-project-description">{props.description}</div>
          </div>
        </div>
        </div>
        
      </div>

    );
  }
}

export default Project;

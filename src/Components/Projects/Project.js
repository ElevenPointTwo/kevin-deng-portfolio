import './Project.css';

function Project(props) {
  // Defining styles using an because we can't access props in the CSS stylesheet.
  const projectStyle = {
    display: "flex",
    width: "700px",
    padding: "20px",
    margin: "30px",
    background: "white",
    borderRadius: "12px",
    color: props.color
  }

  return (
    <div style={projectStyle}>
      <div className="project-information">
        <div className="project-details">
          <div className="project-title">{props.title}</div>
          <div className="project-description">{props.description}</div>
        </div>
        <div className="project-picture">
          <div><img src={props.image} alt={props.title} width={props.width} height={props.height}/></div>
        </div>
      </div>
    </div>
  );
}

export default Project;

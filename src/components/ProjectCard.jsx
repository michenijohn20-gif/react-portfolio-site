function ProjectCard({ project, onDeleteProject }) {
  return (
    <article className="project-card">
      <div className="project-icon">
        {project.title.charAt(0)}
      </div>

      <div className="project-content">
        <span>{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <button
        className="delete-btn"
        onClick={() => onDeleteProject(project.id)}
        aria-label="Delete project"
      >
        X
      </button>
    </article>
  );
}

export default ProjectCard;
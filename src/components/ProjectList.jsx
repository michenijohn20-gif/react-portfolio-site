import ProjectCard from "./ProjectCard";

function ProjectList({ projects, onDeleteProject }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <h3>No projects found</h3>
        <p>Try another search or add a new project.</p>
      </div>
    );
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDeleteProject={onDeleteProject}
        />
      ))}
    </div>
  );
}

export default ProjectList;
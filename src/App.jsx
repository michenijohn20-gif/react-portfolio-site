import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

const starterProjects = [
  {
    id: 1,
    title: "Campus Event Website",
    description: "A responsive site for promoting school and community events.",
    category: "Web Design",
  },
  {
    id: 2,
    title: "Kiosk Sales Tracker",
    description: "A simple app for recording sales and checking daily totals.",
    category: "React App",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "A clean portfolio page for showcasing projects and skills.",
    category: "Portfolio",
  },
];

function App() {
  const [projects, setProjects] = useState(starterProjects);
  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects([
      {
        id: Date.now(),
        ...newProject,
      },
      ...projects,
    ]);
  }

  function deleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  const filteredProjects = projects.filter((project) =>
    `${project.title} ${project.description} ${project.category}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <main className="app">
      <Header />

      <section className="layout">
        <ProjectForm onAddProject={addProject} />

        <section className="projects-section">
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

          <ProjectList
            projects={filteredProjects}
            onDeleteProject={deleteProject}
          />
        </section>
      </section>
    </main>
  );
}

export default App;
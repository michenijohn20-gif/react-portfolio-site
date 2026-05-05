import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.title || !formData.description) {
      alert("Please add both a project title and description.");
      return;
    }

    onAddProject({
      title: formData.title,
      description: formData.description,
      category: formData.category || "General",
    });

    setFormData({
      title: "",
      description: "",
      category: "",
    });
  }

  return (
    <section className="form-card">
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            placeholder="e.g. Weather App"
            value={formData.title}
            onChange={handleChange}
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            placeholder="Briefly describe the project"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>

        <label>
          Category
          <input
            type="text"
            name="category"
            placeholder="e.g. React App"
            value={formData.category}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;
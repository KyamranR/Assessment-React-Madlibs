import { useState } from "react";

const MadlibForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const isFormComplete = Object.values(formData).every(
    (val) => val.trim() !== ""
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="noun"
        placeholder="noun"
        value={formData.noun}
        onChange={handleChange}
      />
      <input
        type="text"
        name="noun2"
        placeholder="noun 2"
        value={formData.noun2}
        onChange={handleChange}
      />
      <input
        type="text"
        name="adjective"
        placeholder="adjective"
        value={formData.adjective}
        onChange={handleChange}
      />
      <input
        type="text"
        name="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button type="submit" disabled={!isFormComplete}>
        Get Story
      </button>
    </form>
  );
};

export default MadlibForm;

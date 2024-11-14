import useForm from "./useForm";

const MadlibForm = ({ onSubmit }) => {
  const { formData, handleChange, isFormComplete } = useForm({
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

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

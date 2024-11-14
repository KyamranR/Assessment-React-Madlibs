import { useState } from "react";

function useForm(initialValues) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const isFormComplete = Object.values(formData).every(
    (val) => val.trim() !== ""
  );

  return {
    formData,
    handleChange,
    isFormComplete,
  };
}

export default useForm;

import { useState } from "react";

const useFormValidation = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });

    // Validate on change
    if (validate) {
      const error = validate({ [name]: value });
      setErrors((prevErrors) => ({
        ...prevErrors,
        ...error,
      }));
    }
  };

  const handleSubmit = (event, onSubmit) => {
    event.preventDefault();
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length > 0) {
        return;
      }
    }
    setIsSubmitting(true);
    onSubmit(values);
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

export default useFormValidation;

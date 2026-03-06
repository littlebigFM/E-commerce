import { useState } from "react";

const useEditableForm = (initialData) => {
  const [formData, setFormData] = useState(initialData);
  const [originalData, setOriginalData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setFormData(originalData);
    setIsEditing(false);
  };

  const handleUpdate = async (updateFn) => {
    try {
      setLoading(true);

      await updateFn(formData); // external update logic

      setOriginalData(formData);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    isEditing,
    loading,
    handleChange,
    handleEdit,
    handleCancel,
    handleUpdate,
  };
};

export default useEditableForm;

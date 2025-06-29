
import React, { useState, useEffect } from 'react';

export default function Form() {
  const [formData, setFormData] = useState([{ name: '', age: '', email: '' }]);
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...formData];
    updated[index][name] = value;
    setFormData(updated);
  };

  const addInput = () => {
    setFormData([...formData, { name: '', age: '', email: '' }]);
  };

  const removeInput = (index) => {
    const updated = [...formData];
    updated.splice(index, 1);
    setFormData(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  useEffect(() => {
    console.log('Form data changed:', formData);
  }, [formData]);

  return (
    <div style={{ padding: '1rem' }}>
      <form onSubmit={handleSubmit}>
        {formData.map((form, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <input name="name" placeholder="Name" value={form.name} onChange={(e) => handleChange(index, e)} />
            <input name="age" placeholder="Age" value={form.age} onChange={(e) => handleChange(index, e)} />
            <input name="email" placeholder="Email" value={form.email} onChange={(e) => handleChange(index, e)} />
            {formData.length > 1 && <button type="button" onClick={() => removeInput(index)}>Remove</button>}
          </div>
        ))}
        <button type="button" onClick={addInput}>Add More</button>
        <button type="submit">Submit</button>
      </form>

      {submittedData.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Submitted Data</h3>
          {submittedData.map((user, index) => (
            <div key={index}>
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
              <p>Email: {user.email}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

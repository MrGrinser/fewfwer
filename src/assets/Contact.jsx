import  { useState } from 'react';
import '../styles/contact.css'; 

const Contact= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    address: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.age.trim()) {
      errors.age = 'Age is required';
    } else if (isNaN(formData.age) || parseInt(formData.age) < 18) {
      errors.age = 'Age must be a number and at least 18';
    }
    if (!formData.address.trim()) {
      errors.address = 'Address is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);   
      setFormData({
        name: '',
        email: '',
        age: '',
        address: ''
      });
    }
  };

  return (
    <div className="membership-form-container"> 
      <h2>Beitrittsformular</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;


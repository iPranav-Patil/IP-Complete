import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name) {
      newErrors.name = 'Name is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit the data
      console.log('Form submitted:', { name, email });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

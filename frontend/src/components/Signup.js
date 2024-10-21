import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const { firstname, lastname, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5555/auth/signup', 
        formData, 
        { withCredentials: true }  // Add this option to include credentials
      );
      alert(response.data.msg);
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data) {
        alert(err.response.data.msg || 'Error signing up');
      } else {
        alert('Network error or server not responding');
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={onChange}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={onChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;

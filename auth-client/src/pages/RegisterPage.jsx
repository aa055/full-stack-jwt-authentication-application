import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    dateOfBirth: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);

      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);

      navigate('/login');
    } catch (err) {
      console.error(err);
      alert('Registration failed');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleRegister} style={styles.form}>
        <h2 style={styles.title}>Register</h2>

        <input
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Date of Birth</label>
        <input
          name="dateOfBirth"
          type="date"
          value={form.dateOfBirth}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          placeholder="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          placeholder="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>Register</button>

        <p style={styles.text}>
          Already have an account?{' '}
          <Link to="/login" style={styles.link}>Login here</Link>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f5f5f5',
  },
  form: {
    background: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  label: {
    marginBottom: '5px',
    fontSize: '14px',
    color: '#555',
  },
  button: {
    width: '100%',
    padding: '12px',
    background: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  text: {
    marginTop: '15px',
    fontSize: '14px',
    textAlign: 'center',
  },
  link: {
    color: '#4CAF50',
    textDecoration: 'none',
  }
};

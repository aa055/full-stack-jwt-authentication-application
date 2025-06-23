import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>Dashboard</h2>
      <nav style={styles.nav}>
        <Link to="/" style={isActive('/') ? styles.activeLink : styles.link}>Home</Link>
        <Link to="/profile" style={isActive('/profile') ? styles.activeLink : styles.link}>Profile</Link>
      </nav>
      <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
    </div>
  );
}

const styles = {
  sidebar: {
    width: '220px',
    // height: '100vh',
    backgroundColor: '#2196F3',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  title: {
    marginBottom: '40px',
  },
  nav: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  link: {
    color: '#ffffffaa',
    textDecoration: 'none',
    fontSize: '18px',
  },
  activeLink: {
    color: '#ffffff',
    fontWeight: 'bold',
    textDecoration: 'underline',
    fontSize: '18px',
  },
  logoutButton: {
    backgroundColor: '#ef5350',
    border: 'none',
    padding: '10px',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

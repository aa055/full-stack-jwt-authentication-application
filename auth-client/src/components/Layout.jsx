import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  content: {
    flexGrow: 1,
    padding: '20px',
    overflowY: 'auto',
    backgroundColor: '#f9f9f9',
  },
};

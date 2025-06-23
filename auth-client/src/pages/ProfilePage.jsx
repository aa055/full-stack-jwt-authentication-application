

import { useEffect, useState } from 'react';
import api from '../services/api';
import Layout from '../components/Layout';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get('/profile');
        console.log('Profle FE response:', res);
        setProfile(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, []);

  return (
    <Layout>
      <h2>Profile</h2>
      {profile ? (
        <div style={styles.profileCard}>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
}

const styles = {
  profileCard: {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    maxWidth: '400px',
  },
};


// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Layout from '../components/Layout';

// export default function ProfilePage() {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/profile', {
//           headers: {
//             Authorization: 'Bearer ' + localStorage.getItem('accessToken')
//           }
//         });
//         setProfile(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchProfile();
//   }, []);

//   return (
//     <Layout>
//       <h2>Profile</h2>
//       {profile ? (
//         <div style={styles.profileCard}>
//           <p><strong>Name:</strong> {profile.name}</p>
//           <p><strong>Email:</strong> {profile.email}</p>
//           <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </Layout>
//   );
// }

// const styles = {
//   profileCard: {
//     background: '#fff',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//     maxWidth: '400px',
//   },
// };
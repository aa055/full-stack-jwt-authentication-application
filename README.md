# 🔐 Full-Stack JWT Auth App (React + Node.js + MongoDB)

A modern full-stack authentication system with secure user registration, login, access control using **JWT tokens**, and protected routes. Built using **React**, **Express**, **MongoDB**, and **Axios**, with **token refresh** logic for seamless UX.

---

## 📌 Features

- ✅ User Registration with Name, Date of Birth, Email, Password  
- ✅ Secure Password Hashing with **bcryptjs**  
- ✅ JWT-based Access & Refresh Token Authentication  
- ✅ Auto Token Refresh on Expiry (via Axios Interceptor)  
- ✅ Protected Routes in React (with Route Guard)  
- ✅ Persistent Sidebar Layout with Profile and Logout  
- ✅ Clean, responsive UI with React hooks  
- ✅ Auto Logout if refresh token is invalid or expired  

---

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- React Router
- Axios
- LocalStorage
- Custom Axios Instance with Interceptors

**Backend:**
- Node.js + Express
- MongoDB (via Mongoose)
- bcryptjs
- jsonwebtoken
- dotenv

---

## 📁 Folder Structure

### 🔧 Backend (Node.js)
/backend
/models
User.js
/routes
auth.js
profile.js
/middleware
authMiddleware.js
server.js
.env

### 🌐 Frontend (React)
/frontend
/components
Layout.jsx
Sidebar.jsx
ProtectedRoute.jsx
/pages
LoginPage.jsx
RegisterPage.jsx
HomePage.jsx
ProfilePage.jsx
api.js
App.jsx
main.jsx


---

## 🧑‍💻 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/jwt-auth-app.git
cd jwt-auth-app
```
### 2. Setup Backend
```bash
cd backend
npm install
```

#### Create a .env file:
```
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority
ACCESS_TOKEN_SECRET=your_access_secret_key
REFRESH_TOKEN_SECRET=your_refresh_secret_key

```
#### Start the server:
```
npm run dev
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```
**Start the React app**:
```bash
npm run dev
```

Frontend: http://localhost:3000

Backend: http://localhost:5000


## 🔒 Token Handling Logic
- Access tokens expire quickly (e.g. 1 minute)
- Refresh tokens are stored in DB per user
- Axios interceptor auto-refreshes tokens on 401 Unauthorized
- Refresh failure logs out the user and redirects to login

## 🧪 Testing
To test:
- Login
- Wait for the access token to expire (e.g. 1 min)
- Navigate to /profile
- Page should auto-refresh token and still load
- If refresh token is invalid or removed → user will be logged out



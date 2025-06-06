import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

export default function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
      setLoggedInUserData(parsedUser.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (userData) {
      const admin = userData.admins.admins.find(
        (e) => e.email === email && e.password === password
      );
      if (admin) {
        setUser('admin');
        setLoggedInUserData(admin);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }));
        return; 
      }

      const employee = userData.employees.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
        return; 
      }
    }

    alert('Invalid Credentials');
  };

  return (
    <>
      {!user ? (<Login handleLogin={handleLogin} />) : user === 'admin' ? (<AdminDashboard changeUser={setUser} data={loggedInUserData} />) : user === 'employee' ? (<EmployeeDashboard changeUser={setUser} data={loggedInUserData} />) : null}
    </>
  );
}

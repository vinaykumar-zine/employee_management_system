import React, { useEffect } from 'react'
import Login from './components/auth/Login'
import EmplyeeDashboard from './components/dashboard/EmplyeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { useState } from 'react'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = ( email, password) => {
    if(email == 'admin@me.com' && password == '123'){
      console.log('this is admin')
    }
    else{
      alert('Invalied credentials')
    }
  }
  getLocalStorage();
  // handleLogin('admin@me.com', 153)

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: ''}
    <EmplyeeDashboard />
    <AdminDashboard />
    </>
  )
}

export default App
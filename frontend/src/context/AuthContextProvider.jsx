import { createContext, useContext, useState, useEffect } from 'react'
import axios from "axios"
import PropTypes from 'prop-types'

const authContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (user) => {
    setUser(user)
  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token")
    setUser(null)
  };

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/verify", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        if (res.data.success) {
          setUser(res.data.user)
        } else {
          setUser(null)
        }
      } catch (error) {
        console.log(error)
      }
    }
    verifyUser()
  }, [])

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  )
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useAuth = () => useContext(authContext)

export default AuthContextProvider

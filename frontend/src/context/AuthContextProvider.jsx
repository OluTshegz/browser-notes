import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const authContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (user) => {
    setUser(user)
  }

  return (
    <authContext.Provider value={{ user, login }}>
      {children}
    </authContext.Provider>
  )
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useAuth = () => useContext(authContext)

export default AuthContextProvider

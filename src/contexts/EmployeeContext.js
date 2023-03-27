import React, {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react'
import PropTypes from 'prop-types'

const EmployeeContext = createContext()

function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees')
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees))
    }
  }, [])

  const addEmployee = useCallback((employee) => {
    setEmployees((prevEmployees) => {
      const updatedEmployees = [...prevEmployees, employee]
      localStorage.setItem('employees', JSON.stringify(updatedEmployees))
      return updatedEmployees
    })
  }, [])

  const value = useMemo(
    () => ({ employees, addEmployee }),
    [employees, addEmployee]
  )

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  )
}

EmployeeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export { EmployeeContext, EmployeeProvider }

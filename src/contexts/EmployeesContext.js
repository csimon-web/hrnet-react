import React, {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react'
import PropTypes from 'prop-types'
import { defaultEmployees } from '../utils/constants'

const EmployeesContext = createContext()

function EmployeesProvider({ children }) {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees')
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees))
    } else {
      setEmployees(defaultEmployees)
      localStorage.setItem('employees', JSON.stringify(defaultEmployees))
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
    <EmployeesContext.Provider value={value}>
      {children}
    </EmployeesContext.Provider>
  )
}

EmployeesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export { EmployeesContext, EmployeesProvider }

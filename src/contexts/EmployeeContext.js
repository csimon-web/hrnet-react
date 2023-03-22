import React, { createContext, useState, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'

const EmployeeContext = createContext()

function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([])

  const addEmployee = useCallback((employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee])
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

/* eslint-disable react/jsx-boolean-value */
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
// import styles from './styles.module.css'

function EmployeeList() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'))
    if (storedEmployees) {
      setEmployees(storedEmployees)
    }
  }, [])

  const columns = [
    { name: 'First Name', selector: (row) => row.firstName },
    { name: 'Last Name', selector: (row) => row.lastName },
    { name: 'Start Date', selector: (row) => row.startDate },
    { name: 'Department', selector: (row) => row.department },
    { name: 'Date of Birth', selector: (row) => row.dateOfBirth },
    { name: 'Street', selector: (row) => row.street },
    { name: 'City', selector: (row) => row.city },
    { name: 'State', selector: (row) => row.state },
    { name: 'Zip Code', selector: (row) => row.zipCode },
  ]

  return (
    <>
      <h1 className="title">Current Employees</h1>
      <div id="employee-div" className="container">
        <DataTable
          data={employees}
          columns={columns}
          noHeader={true}
          pagination={true}
        />
      </div>
    </>
  )
}

export default EmployeeList

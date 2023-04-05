import React, { useContext, useState } from 'react'
import DataTable from 'react-data-table-component'
import { EmployeesContext } from '../../contexts/EmployeesContext'

function EmployeeList() {
  const { employees } = useContext(EmployeesContext)
  const [searchText, setSearchText] = useState('')

  const columns = [
    {
      name: 'First Name',
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: 'Street',
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: 'Zip Code',
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ]

  const filteredEmployees = employees.filter((employee) => {
    const searchString = searchText.toLowerCase()
    return Object.values(employee).some((value) =>
      String(value).toLowerCase().includes(searchString)
    )
  })

  return (
    <>
      <h1 className="title">Current Employees</h1>
      <div id="employee-div" className="container">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <DataTable
          data={filteredEmployees}
          columns={columns}
          noHeader
          pagination
        />
      </div>
    </>
  )
}

export default EmployeeList

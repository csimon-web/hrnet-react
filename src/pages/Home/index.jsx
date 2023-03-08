/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import DateTimePicker from 'react-datetime-picker';
import ReactModal from 'react-modal'
import { departments, states } from '../../utils/constants'
import styles from './styles.module.css'

function Home() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState(new Date())
  // eslint-disable-next-line no-unused-vars
  const [startDate, setStartDate] = useState(new Date())
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState('Sales')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const saveEmployee = (event) => {
    event.preventDefault()
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      department,
      street,
      city,
      state,
      zipCode,
    }
    employees.push(employee)
    localStorage.setItem('employees', JSON.stringify(employees))
    handleOpenModal()
  }

  return (
    <>
      <div className={styles.title}>
        <h1>HRnet</h1>
      </div>
      <div className={styles.container}>
        <Link to="/employees-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form onSubmit={saveEmployee}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            type="date"
            id="date-of-birth"
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
          />
          {/* <DateTimePicker value={dateOfBirth} onChange={setDateOfBirth} /> */}

          <label htmlFor="start-date">Start Date</label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(event) => setDateOfBirth(event.target.value)}
          />
          {/* <DateTimePicker value={startDate} onChange={setStartDate} /> */}

          <fieldset className={styles.address}>
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              value={street}
              onChange={(event) => setStreet(event.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />

            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              value={state}
              onChange={(event) => setState(event.target.value)}
            >
              {states.map((stateElt) => (
                <option
                  key={stateElt.abbreviation}
                  value={stateElt.abbreviation}
                >
                  {state.name}
                </option>
              ))}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              value={zipCode}
              onChange={(event) => setZipCode(event.target.value)}
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          >
            {departments.map((departmentElt, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option key={`${departmentElt}-${index}`} value={departmentElt}>
                {department}
              </option>
            ))}
          </select>

          <button className={styles.submit} type="submit">
            Save
          </button>
        </form>
      </div>
      {isModalOpen && (
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Modal"
        >
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <button
                className={styles.modalClose}
                onClick={() => setIsModalOpen(false)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    setIsModalOpen(false)
                  }
                }}
                type="button"
                tabIndex={0}
              >
                &times;
              </button>
              <p>Employee Created!</p>
            </div>
          </div>
        </ReactModal>
      )}
    </>
  )
}

export default Home

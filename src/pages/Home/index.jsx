/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react'
import { Modal } from 'modals-for-react'
import { EmployeeContext } from '../../contexts/EmployeeContext'
import { departments, states } from '../../utils/constants'
import styles from './styles.module.css'

function Home() {
  const { addEmployee } = useContext(EmployeeContext)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState('Sales')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const saveEmployee = (event) => {
    event.preventDefault()
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
    addEmployee(employee)
    openModal()
  }

  return (
    <>
      <h1 className="title">Create Employee</h1>
      <div className="container">
        <form className={styles.create_employee_form} onSubmit={saveEmployee}>
          <label htmlFor="first-name" className={styles.label}>
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className={styles.input}
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />

          <label htmlFor="last-name" className={styles.label}>
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            className={styles.input}
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />

          <label htmlFor="date-of-birth" className={styles.label}>
            Date of Birth
          </label>
          <input
            type="date"
            id="date-of-birth"
            className={styles.input}
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
          />

          <label htmlFor="start-date" className={styles.label}>
            Start Date
          </label>
          <input
            type="date"
            id="start-date"
            className={styles.input}
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />

          <fieldset className={styles.address_fieldset}>
            <legend>Address</legend>

            <label htmlFor="street" className={styles.label}>
              Street
            </label>
            <input
              type="text"
              id="street"
              className={styles.input}
              value={street}
              onChange={(event) => setStreet(event.target.value)}
            />

            <label htmlFor="city" className={styles.label}>
              City
            </label>
            <input
              type="text"
              id="city"
              className={styles.input}
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />

            <label htmlFor="state" className={styles.label}>
              State
            </label>
            <select
              name="state"
              id="state"
              className={styles.select}
              value={state}
              onChange={(event) => setState(event.target.value)}
            >
              {states.map((stateElt, index) => (
                <option
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${stateElt.abbreviation}-${index}`}
                  value={stateElt.abbreviation}
                >
                  {stateElt.name}
                </option>
              ))}
            </select>

            <label htmlFor="zip-code" className={styles.label}>
              Zip Code
            </label>
            <input
              type="number"
              id="zip-code"
              className={styles.input}
              value={zipCode}
              onChange={(event) => setZipCode(event.target.value)}
            />
          </fieldset>

          <label htmlFor="department" className={styles.label}>
            Department
          </label>
          <select
            name="department"
            id="department"
            className={styles.select}
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          >
            {departments.map((departmentElt, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option key={`${departmentElt}-${index}`} value={departmentElt}>
                {departmentElt}
              </option>
            ))}
          </select>

          <button className={styles.submit_button} type="submit">
            Save
          </button>
        </form>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          showClose
          // fadeDuration={1000}
          // fadeDelay={1.0}
        >
          <p className={styles.modal_message}>Employee Created!</p>
        </Modal>
      )}
    </>
  )
}

export default Home

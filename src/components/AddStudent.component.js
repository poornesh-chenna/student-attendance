import React, { useState } from 'react'

function AddStudent({ students, setstudents }) {
  const [student, setstudent] = useState({
    rollno: '',
    name: '',
    checkInTime: '',
    checkOutTime: '',
  })
  const checkRollno = async () => {
    for (let i = 0; i < students.length; i++) {
      if (students[i].rollno === student.rollno) {
        return false
      }
    }
    return true
  }
  const getTime = async () => {
    const time = new Date().toLocaleTimeString()
    return time.substring(0, 5)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!(await checkRollno())) {
      alert('Roll number already exists')
      return
    }
    const time = await getTime()
    setstudents((prevState) => {
      return [...prevState, { ...student, checkInTime: time }]
    })
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          boxShadow:
            'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
          backgroundColor: '#FDFAF6',
          borderRadius: 5,
          padding: '12px 30px',
        }}
      >
        <h1>ADD STUDENT</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div style={{ margin: '6px 0', fontSize: 18 }}>
              Enter Roll number{' '}
            </div>
            <input
              type="text"
              style={{
                display: 'block',
                padding: '10px',
                borderRadius: '3px',
                borderWidth: '3px 1px 1px 3px',
              }}
              required
              onChange={(e) => {
                return setstudent((prevState) => ({
                  ...prevState,
                  rollno: e.target.value,
                }))
              }}
            />
          </div>
          <div>
            <div style={{ margin: '6px 0', fontSize: 18 }}>
              Enter Student name{' '}
            </div>
            <input
              type="text"
              style={{
                display: 'block',
                padding: '10px',
                borderRadius: '3px',
                borderWidth: '3px 1px 1px 3px',
              }}
              required
              onChange={(e) =>
                setstudent((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
          </div>
          <button
            style={{
              borderRadius: '3px',
              width: '80%',
              display: 'flex',
              justifyContent: 'center',
              margin: '20px auto',
              backgroundColor: '#5dbea3',
              fontSize: '20px',
              padding: '5px 14px',
              border: '1px solid #5dbea3',
              color: 'whitesmoke',
            }}
            type="submit"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddStudent

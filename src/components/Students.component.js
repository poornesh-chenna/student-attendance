import React, { useState } from 'react'

function Students({ students, studentCount, setstudents }) {
  const [searchField, setsearchField] = useState('')

  const filteredStudents = students.filter((student) => {
    return (
      student.rollno.includes(searchField) || student.name.includes(searchField)
    )
  })

  const handleCheckout = (rno) => {
    setstudents(students.filter((student) => student.rollno !== rno))
    setsearchField('')
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ fontSize: '45px', color: '#064420' }}>
        Total Students : {students.length}
      </h1>
      <div>
        <input
          type="text"
          style={{
            display: 'block',
            padding: '15px',
            borderRadius: '3px',
            borderWidth: '3px 1px 1px 3px',
            width: '30rem',
            margin: '8px 0',
          }}
          placeholder=" Search for students"
          onChange={(e) => setsearchField(e.target.value)}
          value={searchField}
        />
      </div>
      <div>
        {filteredStudents.map((student, idx) => {
          return (
            <div
              key={idx}
              style={{
                padding: '12px 38px',
                margin: '8px 0',
                width: '35rem',
                backgroundColor: '#FDFAF6',
                boxShadow:
                  'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
              }}
            >
              <span style={{ fontSize: '22px', fontWeight: 'bold' }}>
                🧑🏼‍🎓 {student.rollno}
              </span>
              <span style={{ marginLeft: 20, fontSize: '20px' }}>
                {student.name}
              </span>
              <button
                style={{
                  float: 'right',
                  borderRadius: '3px',
                  width: '6.3rem',
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: '#dd7973',
                  fontSize: '16px',
                  padding: '6px 8px',
                  border: '1px solid #dd7973',
                  margin: '5px',
                  color: 'whitesmoke',
                }}
                onClick={(e) => handleCheckout(student.rollno)}
              >
                Check out
              </button>
              <div>
                <span style={{ color: '#7F8487' }}>
                  check in Time : {student.checkInTime}
                </span>
              </div>
            </div>
          )
        })}
      </div>
      <div></div>
    </div>
  )
}

export default Students

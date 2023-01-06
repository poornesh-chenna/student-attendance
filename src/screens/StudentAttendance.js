import React, { useState } from 'react'
import AddStudent from '../components/AddStudent.component'
import Students from '../components/Students.component'

function StudentAttendance() {
  const [students, setstudents] = useState([])

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          padding: '25px',
        }}
      >
        <AddStudent students={students} setstudents={setstudents} />
      </div>
      <div style={{ margin: '0 auto', width: '75%' }}>
        <Students setstudents={setstudents} students={students} />
      </div>
    </div>
  )
}

export default StudentAttendance

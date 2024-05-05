// import React, { useEffect, useState } from 'react'
// //Calender/////
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';



// const startPrediction = () => {
//   fetch('http://127.0.0.1:8080/startPrediction', {
//     method: 'POST',
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch((error) => {
//     console.error('Error:', error);
//   });
// }




// const Dashboard = () => {
//   const [date, setDate] = useState(new Date());
//   console.log(date)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDate(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);


//   return (
//     <>
//       <div className="dashboard">
//         <div className="dashboard-header">
//           <h3>Welcome to FAS! <br /> It's <strong>{date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</strong></h3>

//         </div>
//         <div className="dashboard-body" style={{ margin: 20 }}>
//           <Calendar
//             onChange={setDate}
//             value={date}
//             firstDayOfWeek={0}
//             tileContent={({ date, view }) => {
//               if (view === 'month') {
//                 const day = date.getDate();
//                 const month = date.getMonth();
//                 const year = date.getFullYear();
//                 // const data = require('../resources/hamro_patro/hamro-patro-scrapper/data/years/2080.json');
//                 // const dayData = data[month-3]?.days?.[day - 17];           
//                 // const event = dayData?.event;
//                 // const isHoliday = dayData?.isHoliday;
//                 // // const dayInEn = dayData?.dayInEn;
//                 // const dayInNp = dayData?.day;
//                 // const en = dayData?.en;
//                 // const className = isHoliday ? 'holiday' : '';
//                 return (
//                   <div >
//                     {/* <div>{dayInEn}</div> */}
//                     {/* <div>{dayInNp}</div> */}
//                     {/* <div>{event}</div> */}
//                   </div>
//                 );
//               }
//             }}
//           />  

//           <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
//           <button onClick={startPrediction} className="btn btn-primary btn-lg">Start Prediction</button>
//         </div>
//           </div>


//       </div>
//     </>
//   )
// }

// export default Dashboard



















import React, { useEffect, useState } from 'react'
//Calender/////
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const startPrediction = () => {
  fetch('http://127.0.0.1:8080/startPrediction', {
    method: 'POST',
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
}



// const seeStudentData = async () => {
//   try {
//     const attendanceResponse = await fetch('http://localhost:8000/attendanceRecords');
//     const attendanceData = await attendanceResponse.json();
//     console.log("attendanceData",attendanceData)

//     const studentIds = [...new Set(attendanceData.map(record => record.student_id))];
//     const studentDataPromises = studentIds.map(id => fetch(`http://localhost:8000/students/${id}`).then(response => response.json()));
//     const studentsData = await Promise.all(studentDataPromises);

//     console.log("studentsData",studentsData)
//     return { attendanceData, studentsData };
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }


const seeStudentData = async () => {
  try {
    const attendanceResponse = await fetch('http://localhost:8000/attendanceRecords');
    const attendanceData = await attendanceResponse.json();

    console.log("attendanceData",attendanceData)

    const studentIds = [...new Set(attendanceData.map(record => record.student_id))].filter(id => id !== null);
    console.log("studentIds",studentIds)
    const studentsData = [];
    for (let id of studentIds) {
      const studentResponse = await fetch(`http://localhost:8000/students/${id}`);
      const studentData = await studentResponse.json();
      
      studentsData.push(studentData);
    }
    console.log("studentsData",studentsData)

    console.log("studentsData",studentsData)
    return { attendanceData, studentsData };
  } catch (error) {
    console.error('Error:', error);
  }
}







const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [studentsData, setStudentsData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);


  // const handleSeeStudentData = async () => {
  //   const data = await seeStudentData();
  //   console.log("studentData.length",studentData.length)
  //   setStudentData(data.studentData);
  //   setAttendanceData(data.attendanceData);

  // }

  const handleSeeStudentData = async () => {
    console.log("Inside")
    const data = await seeStudentData();
    console.log("data.studentsData",data.studentsData)
    console.log("data.attendanceData",data.attendanceData)

    if (data && data.studentsData) {
      setStudentsData(data.studentsData);
      setAttendanceData(data.attendanceData);
    } else {
      console.error('Unexpected API response', data);
    }
  }


  // console.log(date)
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  // return (
  //   <>
  //     <div className="dashboard">
  //       <div className="dashboard-header">
  //         <h3>Welcome to FAS! <br /> It's <strong>{date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</strong></h3>
  //       </div>
  //       <div className="dashboard-body" style={{ margin: 20 }}>
  //         <Calendar
  //           onChange={setDate}
  //           value={date}
  //           firstDayOfWeek={0}
  //           tileContent={({ date, view }) => {/* ...existing code... */ }}
  //         />

  //         <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
  //           <button onClick={startPrediction} className="btn btn-primary btn-lg" style={{ marginRight: "40px" }}>Start Prediction</button>
  //           <button onClick={handleSeeStudentData} className="btn btn-primary btn-lg" style={{ marginLeft: "40px" }}>See Student Data</button>
  //         </div>


  //         {studentData && (
  //           <h2>{studentData.student_name}</h2>
  //         )}

  //         {attendanceData.length > 0 && (
  //           <table>
  //             <thead>
  //               <tr>
  //                 {/* <th>Attendance ID</th>
  //                 <th>Student ID</th> */}
  //                 <th>Attendance Timestamp</th>
  //                 <th>Attendance Status</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               {attendanceData.map(record => (
  //                 <tr key={record.attendance_id}>
  //                   {/* <td>{record.attendance_id}</td>
  //                   <td>{record.student_id}</td> */}
  //                   <td>{new Date(record.Attendance_Timestamp).toLocaleString()}</td>
  //                   <td>{record.attendance_status ? 'Present' : 'Absent'}</td>
  //                 </tr>
  //               ))}
  //             </tbody>
  //           </table>
  //         )}
  //       </div>
  //     </div>
  //   </>
  // )




//   return (
//     <>
//       <div className="dashboard">
//         <div className="dashboard-header">
//           <h3>Welcome to FAS! <br /> It's <strong>{date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</strong></h3>
//         </div>
//         <div className="dashboard-body" style={{ margin: 20 }}>
//           <Calendar
//             onChange={setDate}
//             value={date}
//             firstDayOfWeek={0}
//             tileContent={({ date, view }) => {/* ...existing code... */ }}
//           />
  
//           <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
//             <button onClick={startPrediction} className="btn btn-primary btn-lg" style={{ marginRight: "40px" }}>Start Prediction</button>
//             <button onClick={handleSeeStudentData} className="btn btn-primary btn-lg" style={{ marginLeft: "40px" }}>See Student Data</button>
//           </div>
  
//           {studentsData.map(student => (
//             <>
//               <h1 className="text-4xl"> Student Name: {student.student_name}</h1>
//               {attendanceData.filter(record => record.student_id === student.student_id).length > 0 && (
//                 <table className="table-auto">
//                   <thead>
//                     <tr>
//                       <th className="px-4 py-2">Attendance Timestamp</th>
//                       <th className="px-4 py-2">Attendance Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {attendanceData.filter(record => record.student_id === student.student_id).map(record => (
//                       <tr key={record.attendance_id} className="bg-blue-200">
//                         <td className="border px-4 py-2">{new Date(record.attendance_timestamp).toLocaleString()}</td>
//                         <td className="border px-4 py-2">{record.attendance_status ? 'Present' : 'Absent'}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}
//             </>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }
// export default Dashboard



return (
  <>
    <div className="dashboard">
      <div className="dashboard-header">
        <h3>Welcome to FAS! <br /> It's <strong>{date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</strong></h3>
      </div>
      <div className="dashboard-body" style={{ margin: 20 }}>
        <Calendar
          onChange={setDate}
          value={date}
          firstDayOfWeek={0}
          tileContent={({ date, view }) => {/* ...existing code... */ }}
        />

        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <button onClick={startPrediction} className="btn btn-primary btn-lg" style={{ marginRight: "40px" }}>Start Prediction</button>
          <button onClick={handleSeeStudentData} className="btn btn-primary btn-lg" style={{ marginLeft: "40px" }}>See Attendance Data</button>
        </div>

        <div className="flex flex-wrap justify-around">
          {studentsData.map(student => (
            <div className="w-1/2 p-4">
              <h2 className="text-4xl mb-5">Student Name: {student.student_name}</h2>
              {attendanceData.filter(record => record.student_id === student.student_id).length > 0 && (
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Attendance Timestamp</th>
                      <th className="px-4 py-2">Attendance Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceData.filter(record => record.student_id === student.student_id).map(record => (
                      <tr key={record.attendance_id} className="bg-blue-200">
                        <td className="border px-4 py-2">{new Date(record.attendance_timestamp).toLocaleString()}</td>
                        <td className="border px-4 py-2">{record.attendance_status ? 'Present' : 'Absent'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
)
}
export default Dashboard





//   return (
//     <>
//       <div className="dashboard">
//         <div className="dashboard-header">
//           <h3>Welcome to FAS! <br /> It's <strong>{date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</strong></h3>
//         </div>
//         <div className="dashboard-body" style={{ margin: 20 }}>
//           <Calendar
//             onChange={setDate}
//             value={date}
//             firstDayOfWeek={0}
//             tileContent={({ date, view }) => {/* ...existing code... */ }}
//           />
  
//           <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
//             <button onClick={startPrediction} className="btn btn-primary btn-lg" style={{ marginRight: "40px" }}>Start Prediction</button>
//             <button onClick={handleSeeStudentData} className="btn btn-primary btn-lg" style={{ marginLeft: "40px" }}>See Student Data</button>
//           </div>
  
//           {studentsData.map(student => (
//             <>
//               <h2>{student.student_name}</h2>
//               {attendanceData.filter(record => record.student_id === student.student_id).length > 0 && (
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>Attendance Timestamp</th>
//                       <th>Attendance Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {attendanceData.filter(record => record.student_id === student.student_id).map(record => (
//                       <tr key={record.attendance_id}>
//                         <td>{new Date(record.attendance_timestamp).toLocaleString()}</td>
//                         <td>{record.attendance_status ? 'Present' : 'Absent'}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}
//             </>
//           ))}
//         </div>
//       </div>
//     </>
//   )

  

// }

// export default Dashboard

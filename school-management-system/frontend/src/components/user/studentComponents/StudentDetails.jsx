import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../../redux/slices/studentSlice";

const StudentList = () => {
  const dispatch = useDispatch();

  // Access Redux state
  const { students, loading, errorMessage } = useSelector(
    (state) => state.students
  );

  // Fetch students when the component mounts
  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Details</h1>

      {/* Loading State */}
      {loading && <p className="text-blue-500">Loading students...</p>}

      {/* Error State */}
      {errorMessage && <p className="text-red-500">Error: {errorMessage}</p>}

      {/* Student List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.length > 0 ? (
          students.map((student, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 rounded shadow-md"
            >
              <p>
                <strong>Name:</strong> {student.name}
              </p>
              <p>
                <strong>Age:</strong> {student.age}
              </p>
              <p>
                <strong>Grade:</strong> {student.grade}
              </p>
              <p>
                <strong>Section:</strong> {student.section}
              </p>
            </div>
          ))
        ) : (
          <p>No students found.</p>
        )}
      </div>
    </div>
  );
};

export default StudentList;

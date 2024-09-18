// src/components/Student.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import StudentDisplay from "./StudentDisplay";

const Student = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/users/${user._id}`
        );
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    fetchStudentData();
  }, [user._id]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome, {student.name}</h1>
      <StudentDisplay student={student} />
    </div>
  );
};

export default Student;

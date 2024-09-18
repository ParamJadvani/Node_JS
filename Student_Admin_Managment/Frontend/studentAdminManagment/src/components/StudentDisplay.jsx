import React from "react";

const StudentDisplay = ({ student }) => {
  return (
    <div className="card bg-base-100 shadow-xl p-4 mb-4">
      <h2 className="text-lg font-semibold">{student.name}</h2>
      <p className="text-sm">
        <span className="font-bold">Email:</span> {student.email}
      </p>
      <p className="text-sm">
        <span className="font-bold">Age:</span> {student.age}
      </p>
    </div>
  );
};

export default StudentDisplay;

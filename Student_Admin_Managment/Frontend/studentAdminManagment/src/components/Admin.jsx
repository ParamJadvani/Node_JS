// src/components/Admin.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import StudentDisplay from "./StudentDisplay";

const Admin = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [students, setStudents] = useState([]);
  const [query, setQuery] = useState({
    name: "",
    age: "",
    role: "student",
    sort: "",
  });

  useEffect(() => {
    const fetchStudentsData = async () => {
      const queryString = new URLSearchParams(query).toString();
      const response = await axios.get(
        `http://localhost:8090/users/filter?${queryString}`
      );
      setStudents(response.data);
    };
    fetchStudentsData();
  }, [query]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevQuery) => ({
      ...prevQuery,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}</h1>
      <div className="card bg-base-100 shadow-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
        <p className="text-lg">
          <span className="font-bold">Email:</span> {user.email}
        </p>
        <p className="text-lg">
          <span className="font-bold">Age:</span> {user.age}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Filter and Sort</h2>
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Search by name"
            className="input input-bordered"
            value={query.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Age Range</span>
          </label>
          <select
            name="age"
            className="select select-bordered"
            value={query.age}
            onChange={handleInputChange}
          >
            <option value="">All ages</option>
            <option value="0-10">0-10</option>
            <option value="10-19">10-19</option>
            <option value="20-29">20-29</option>
            <option value="30-39">30-39</option>
            <option value="40-49">40-49</option>
            <option value="50+">50+</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Sort by Age</span>
          </label>
          <select
            name="sort"
            className="select select-bordered"
            value={query.sort}
            onChange={handleInputChange}
          >
            <option value="">Default</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">All Students</h2>
        <div className="grid grid-cols-1 gap-4">
          {students.map((student) => (
            <StudentDisplay key={student._id} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;

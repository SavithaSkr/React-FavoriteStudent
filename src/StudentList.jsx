import React, { useContext } from "react";
import { StudentContext, StudentProvider } from "./StudentProvider";

const StudentList = () => {
  const { students, addFavorites } = useContext(StudentContext);
  return (
    <div className="container mx-auto mt-7">
      <h2 className="text-3xl font-bold mb-3">Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id} className="mb-2 flex items-center">
            <span className="mr-2">{student.name}</span>

            <button
              className="bg-teal-500 hover:bg-teal-400 text-black font-bold p-2 rounded-md"
              onClick={() => addFavorites(student)}
            >
              Add To Favorite
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default StudentList;

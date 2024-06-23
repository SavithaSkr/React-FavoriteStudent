import React, { useContext } from "react";
import StudentProvider, { StudentContext } from "./StudentProvider";

const FavoriteStudent = () => {
  const { favoriteStud, removeFavorties } = useContext(StudentContext);
  return (
    <div className="container mx-auto mt-8 items-center justify-center">
      <ul>
        {favoriteStud.map((students) => (
          <div>
            <li key={students.id} className="mb-2 flex items-center">
              <span className="mr-2">{students.name}</span>

              <button
                className="bg-teal-300 hover:bg-teal-400 text-black font-bold p-2 rounded-md"
                onClick={() => removeFavorties(students)}
              >
                Remove from Favorite
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default FavoriteStudent;

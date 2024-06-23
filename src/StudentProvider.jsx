import React, { createContext, useState } from "react";
import FavoriteStudent from "./FavoriteStudent";
export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "krish",
      status: false,
    },
    {
      id: 2,
      name: "Aisha",
      status: false,
    },
    {
      id: 3,
      name: "Arti",
      status: false,
    },
    {
      id: 4,
      name: "Dipti",
      status: false,
    },
    {
      id: 5,
      name: "Madhu",
      status: false,
    },
    {
      id: 6,
      name: "Vedika",
      status: false,
    },
    {
      id: 7,
      name: "Chandini",
      status: false,
    },
    {
      id: 8,
      name: "Priya",
      status: false,
    },
    {
      id: 9,
      name: "Lilavati",
      status: false,
    },
    {
      id: 10,
      name: "Karishma",
      status: false,
    },
  ]);
  const [favoriteStud, setFavoriteStud] = useState([]);
  console.log(favoriteStud);
  const addFavorites = (student) => {
    setFavoriteStud([...favoriteStud, student]);
    setStudents(students.filter((s) => s.id !== student.id));
  };

  const removeFavorties = (student) => {
    setStudents([...students, student]);
    setFavoriteStud(favoriteStud.filter((s) => s.id !== student.id));
  };

  return (
    <StudentContext.Provider
      value={{ students, favoriteStud, addFavorites, removeFavorties }}
    >
      {children}
    </StudentContext.Provider>
  );
};

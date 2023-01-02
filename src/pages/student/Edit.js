import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function edit() {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/student/${id}`).then((res) => {
      setName(res.data.name);
      setGrade(res.data.grade);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
    grade: grade,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/student/${id}`, data).then(navigate("/"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">User Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your grade"
        />
       
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE student
        </button>
      </form>
    </div>
  );
}

export default edit;
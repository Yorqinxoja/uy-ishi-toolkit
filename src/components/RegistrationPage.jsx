import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../store/students";
import { useNavigate } from "react-router-dom";
import { Input, Button, Spin } from "antd";
import { toast } from "react-toastify";

const RegistrationPage = () => {
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      dispatch(addStudent({ studentName, studentAge, studentEmail }));
      setStudentName("");
      setStudentAge("");
      setStudentEmail("");
      setLoading(false);
      toast.success("Student registered successfully!");
      navigate("/students");
    }, 1000);
  };

  return (
    <form onSubmit={handleRegister} className="registration-container">
      <h2>Student Registration</h2>
      <Input
        type="text"
        placeholder="Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        required
      />
      <Input
        type="number"
        placeholder="Age"
        value={studentAge}
        onChange={(e) => setStudentAge(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={studentEmail}
        onChange={(e) => setStudentEmail(e.target.value)}
        required
      />
      <Button type="primary" htmlType="submit" disabled={loading}>
        {loading ? <Spin /> : "Register"}
      </Button>
    </form>
  );
};

export default RegistrationPage;

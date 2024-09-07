import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, deleteStudent } from '../store/students';
import { Link } from 'react-router-dom';
import { Input, Button, Table, Modal } from 'antd';
import { toast } from 'react-toastify';

const StudentListPage = () => {
  const { studentsList, searchQuery } = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const filteredStudents = studentsList.filter((student) =>
    student.studentName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (index) => {
    Modal.confirm({
      title: 'Are you want to delete this student?',
      onOk: () => {
        dispatch(deleteStudent(index));
        toast.success('Student deleted successfully!');
      },
    });
  };

  const columns = [
    { title: 'Name', dataIndex: 'studentName', key: 'name' },
    { title: 'Age', dataIndex: 'studentAge', key: 'age' },
    { title: 'Email', dataIndex: 'studentEmail', key: 'email' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, __, index) => (
        <Button danger onClick={() => handleDelete(index)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div className="list-container">
      <h2>Student List</h2>
      <Input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
      <Table dataSource={filteredStudents} columns={columns} rowKey="email" />
      <Button type="primary">
        <Link to="/">Add Student</Link>
      </Button>
    </div>
  );
};

export default StudentListPage;

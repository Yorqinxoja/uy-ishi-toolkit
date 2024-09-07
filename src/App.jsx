import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import RegistrationPage from "./components/RegistrationPage";
import StudentListPage from "./components/StudentListPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Header, Content } = Layout;
const notify = () => toast("Wow so easy!");

function App() {
  return (
    <Layout>
      <Router>
        <Header
          style={{
            padding: "0",
            backgroundColor: "#001529",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ borderRadius: "8px", overflow: "hidden", width: "100%" }}
          >
            <Menu.Item key="1">
              <Link
                to="/"
                style={{
                  padding: "0px 20px",
                  display: "block",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Register
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link
                to="/students"
                style={{
                  padding: "0px 20px",
                  display: "block",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Student List
              </Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: "20px", minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<RegistrationPage />} />
            <Route path="/students" element={<StudentListPage />} />
          </Routes>
        </Content>
      </Router>
        <button onClick={notify}>Notify!</button>
        <ToastContainer/>
    </Layout>
  );
}

export default App;

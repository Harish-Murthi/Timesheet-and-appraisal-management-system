import { useState } from "react";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "./assets/images/SriShanmughalogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch,faBell,faUserCircle,faUserTie,faUsers,faChalkboardTeacher,faUserShield,faUserCog,faArrowLeft,faArrowRight,} from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Administration from "./Pages/Layoutpage/Administration";
import Engineering from "./Pages/Mainpage/Engineering"; 

function App() {
  const [opened, { toggle }] = useDisclosure();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: collapsed ? 70 : 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
          }}
        >
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={Logo}
              alt="Logo"
              style={{
                height: "12vh",
                width: "auto",
                position: "relative",
                marginLeft: "10px",
              }}
            />
            Sri Shanmugha Educational Institutions
            <FontAwesomeIcon
              icon={faSearch}
              style={{ marginLeft: "790px", cursor: "pointer" }}
            />
            Search..{" "}
            <FontAwesomeIcon
              icon={faBell}
              style={{ marginLeft: "50px", cursor: "pointer" }}
            />
          </div>
          <FontAwesomeIcon
            icon={faUserCircle}
            style={{
              fontSize: "2.5rem",
              marginLeft: "1320px",
              cursor: "pointer",
              position: "absolute",
            }}
          />
          <span style={{ marginRight: "60px" }}>Navanitha Mani</span>
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <div
            style={{
              width: collapsed ? "70px" : "210px",
              padding: "10px",
              fontSize: "16px",
              height: "600px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              backgroundColor: "#fff",
              position: "absolute",
              marginTop: "2px",
              paddingTop: "30px",
            }}
          >
            {/* Arrow icon for collapsing/expanding */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                marginBottom: "20px",
                justifyContent: collapsed ? "center" : "flex-end",
              }}
              onClick={() => setCollapsed(!collapsed)}
            >
              <FontAwesomeIcon
                icon={collapsed ? faArrowRight : faArrowLeft} // Toggle the icon
                style={{
                  fontSize: "16px",
                  transition: "transform 0.3s", // Add smooth transition
                }}
              />
            </div>

            <NavLink
              to="/administration"
              style={({ isActive }) => ({
                width: "70%",
                padding: "10px",
                marginBottom: "10px",
                textAlign: "left",
                background: isActive ? "#172282" : "transparent", // Active background
                border: "none",
                fontSize: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: collapsed ? "center" : "flex-start",
                transition: "background-color 0.3s, color 0.3s",
                borderRadius: "30px",
                marginLeft: "2px",
                color: isActive ? "white" : "black", // Active text color
                 textDecoration: "none"
              })}
              onMouseEnter={(e) => {
                if (!e.target.style.backgroundColor.includes("#172282")) {
                  e.target.style.backgroundColor = "#172282";
                  e.target.style.color = "white";
                }
              }}
              onMouseLeave={(e) => {
                if (!e.target.className.includes("active")) {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "black";
                }
              }}
            >
              <FontAwesomeIcon
                icon={faUserTie}
                style={{ marginRight: collapsed ? "0" : "8px" }}
              />
              {!collapsed && "Administration"}
            </NavLink>

            <button
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "8px",
                textAlign: "left",
                background: "transparent",
                border: "none",
                fontSize: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: collapsed ? "center" : "flex-start",
                transition: "background-color 0.3s, color 0.3s",
                borderRadius: "30px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#172282";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "black";
              }}
            >
              <FontAwesomeIcon
                icon={faUsers}
                style={{ marginRight: collapsed ? "0" : "8px" }}
              />
              {!collapsed && "HR Department"}
            </button>

            <button
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "8px",
                textAlign: "left",
                background: "transparent",
                border: "none",
                fontSize: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: collapsed ? "center" : "flex-start",
                transition: "background-color 0.3s, color 0.3s",
                borderRadius: "30px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#172282";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "black";
              }}
            >
              <FontAwesomeIcon
                icon={faUserShield}
                style={{ marginRight: collapsed ? "0" : "8px" }}
              />
              {!collapsed && "Head of Department"}
            </button>
            <button
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "8px",
                textAlign: "left",
                background: "transparent",
                border: "none",
                fontSize: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: collapsed ? "center" : "flex-start",
                transition: "background-color 0.3s, color 0.3s",
                borderRadius: "30px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#172282";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "black";
              }}
            >
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                style={{ marginRight: collapsed ? "0" : "8px" }}
              />
              {!collapsed && "Teaching Staff"}
            </button>
            <button
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "8px",
                textAlign: "left",
                background: "transparent",
                border: "none",
                fontSize: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: collapsed ? "center" : "flex-start",
                transition: "background-color 0.3s, color 0.3s",
                borderRadius: "30px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#172282";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "black";
              }}
            >
              <FontAwesomeIcon
                icon={faUserCog}
                style={{ marginRight: collapsed ? "0" : "8px" }}
              />
              {!collapsed && "Non-Teaching Staff"}
            </button>
          </div>
        </AppShell.Navbar>

        <AppShell.Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/engineering" element={<Engineering />} />
          </Routes>
        </AppShell.Main>
      </AppShell>{" "}
    </Router>
  );
}
function Home() {
  return (
    <div
      style={{
        position: "relative",
        marginTop: "250px",
        marginLeft: "40%",
        fontSize: "28px",
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "lightgrey",
        padding: "10px 20px",
        borderRadius: "8px",
        color: "#333",
      }}
    >
      Navanitha Mani 👋
    </div>
  );
}
export default App;

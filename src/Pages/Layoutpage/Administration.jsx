import { AppShell, Button, Image, Text, Center } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
// Replace with your actual image paths or URLs
import Engineering from "../../assets/images/Engineering.svg";
import Pharmacy from "../../assets/images/Pharmacy.svg";
import AlliedHealth from "../../assets/images/AlliedHealth.jpg";
import Nursing from "../../assets/images/Nursing.svg";

function Administration() {
  const navigate = useNavigate();
  // Array to store department names, background colors, and image sources for each card
  const departments = [
    { name: "Engineering", bgColor: "#E3EAFB", imgSrc: Engineering },
    { name: "Pharmacy", bgColor: "#FCE8E8", imgSrc: Pharmacy },
    { name: "Allied Health Science", bgColor: "#E7F5E6", imgSrc: AlliedHealth },
    { name: "Nursing", bgColor: "#ECE7F5", imgSrc: Nursing },
  ];

  // Track hover state for each department card
  const [hoveredDept, setHoveredDept] = useState(null);

  return (
    <AppShell>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "5%" }}>
      {departments.map((dept) => (
        <Button
          key={dept.name}
          onClick={() => dept.name === "Engineering" && navigate("/engineering")} // Navigate on click
          style={{
            border: "none",
            width: "150px",
            height: "180px",
            backgroundColor: hoveredDept === dept.name ? "#172282" : dept.bgColor,
            color: hoveredDept === dept.name ? "white" : "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "10px",
            padding: "15px",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseEnter={() => setHoveredDept(dept.name)}
          onMouseLeave={() => setHoveredDept(null)}
        >
          <Center>
            <Image src={dept.imgSrc} width={80} height={80} radius="50%" alt={dept.name} />
          </Center>
          <Text style={{ marginTop: "10px", textAlign: "center", fontWeight: "500" }}>{dept.name}</Text>
        </Button>
      ))}
    </div>
  </AppShell>
  );
}

export default Administration;

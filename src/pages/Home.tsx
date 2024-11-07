import React, { useState } from "react";
import SidePanel from "../components/dashboard/SidePanel"
import MainPanel from "../components/dashboard/MainPanel"
import styles from "./Home.module.css"

const Home: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState("Dashboard")

  const handleNavigation = (section: string) => {
    setSelectedSection(section);
  }

    return (
       <div className={styles.dashboard_container}>
         <SidePanel onNavigate={handleNavigation}/>
          <MainPanel selectedSection={selectedSection} onNavigate={handleNavigation}/>
       </div>
    )
}



export default Home
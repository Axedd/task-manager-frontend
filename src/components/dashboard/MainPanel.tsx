import React from "react";
import styles from "./MainPanel.module.css";
import Dashboard from "./dashboard";
import TaskSection from "../Tasks/TaskSection";
import ManageTasks from "../../pages/ManageTasks";

type MainPanelProps = {
    selectedSection: string;
    onNavigate: (section: string) => void;  // Receive onNavigate as a prop
  };

const MainPanel: React.FC<MainPanelProps> = ({ selectedSection, onNavigate }) => {
    return (
        <div className={styles.main_panel}>
            <div className={styles.main_header}>
                <div className={styles.header_items}>
                    <h3>Good morning, Axed!</h3>
                    {selectedSection == "My Tasks" && <button onClick={() => onNavigate("ManageTasks")}>Add Task</button>}
                </div>
            </div>
            {selectedSection === "Dashboard" && <Dashboard />}
            {selectedSection === "My Tasks" && <TaskSection />}
            {selectedSection === "ManageTasks" && <ManageTasks />}
        </div>
    );
};

export default MainPanel;
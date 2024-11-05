import React from "react";
import styles from "./MainPanel.module.css";
import Dashboard from "./dashboard";
import TaskSection from "../Tasks/TaskSection";

type MainPanelProps = {
    selectedSection: string;
};

const MainPanel: React.FC<MainPanelProps> = ({ selectedSection }) => {
    return (
        <div className={styles.main_panel}>
            <div className={styles.main_header}>Good morning, Axed!</div>
            {selectedSection === "Dashboard" && <Dashboard />}
            {selectedSection === "My Tasks" && <TaskSection />}
        </div>
    );
};

export default MainPanel;
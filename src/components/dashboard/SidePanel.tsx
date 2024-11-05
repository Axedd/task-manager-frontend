import React from "react";
import styles from "./SidePanel.module.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useAuth } from "../../contexts/AuthContext";

type SidePanelProps = {
    onNavigate: (section: string) => void;
};

const SidePanel: React.FC<SidePanelProps> = ( { onNavigate } ) => {
    const { user, isAuthenticated, loading } = useAuth();

    return (
        <div className={styles.panel_container}>
            <div className={styles.panel_container_header}>
                <p>
                    <i className="fas fa-user"></i> {isAuthenticated ? (
                        user?.username
                    ): ("User")}
                </p>
            </div>
            <div onClick={() => onNavigate("Dashboard")} className={styles.nav_route}>
                <p className={styles.nav_route_item}>
                    <i className="fas fa-tachometer-alt"></i> Dashboard
                </p>
            </div>
            <div onClick={() => onNavigate("My Tasks")} className={styles.nav_route}>
                <p className={styles.nav_route_item}>
                    <i className="fas fa-tasks"></i> My Tasks
                </p>
            </div>
        </div>
    );
}



export default SidePanel;
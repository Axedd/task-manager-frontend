import React from "react";
import { fetchTasks } from "../../services/api";
import { Task } from "../../types";
import styles from "./TaskList.module.css"


interface TaskListProps {
    tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks  }) => {

    return (
        <div className={styles.task_list_container}>
            <div className={styles.task_list_header}>
                <p>My Tasks (1)</p>
                <span>&#8942;</span>
            </div>
            <ul className={styles.task_list}>
                {tasks.map((task) => (
                    <li key={task.task_id} className={styles.task_item}>
                        <h3 className={styles.task_title}>{task.title}</h3>
                        <p className={styles.task_description}>{task.description}</p>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default TaskList;
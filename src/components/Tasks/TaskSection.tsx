import React, { useEffect, useState } from "react";
import TaskForm from "../Forms/TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import { Task } from "../../types"; 
import { fetchTasks, deleteTask as deleteTaskApi } from "../../services/api";

const TaskSection: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const fetchAllTasks = async () => {
        try {
            const fetchedTasks = await fetchTasks();
            // Extract the tasks array from the response
            setTasks(fetchedTasks.tasks || []); // Ensure it's an array, default to empty if not found
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    useEffect(() => {
        fetchAllTasks();
    }, []);

    return (
        <div>
            <TaskList tasks={tasks} />
        </div>
    );
};

export default TaskSection;
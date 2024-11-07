import React, { useEffect, useState } from 'react';
import { Task } from '../types';
import { fetchTasks } from '../services/api';
import TaskList from '../components/TaskList/TaskList';
import AddTask from '../components/Tasks/AddTask';
import styles from './ManageTasks.module.css'



const ManageTasks: React.FC = () => {
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
        <div className={styles.manage_tasks}>
            <AddTask/>
            <TaskList tasks={tasks}/>
        </div>
    )
}

export default ManageTasks;





import React, { useEffect, useState } from 'react';
import TaskForm from '../components/Forms/TaskForm/TaskForm';
import TaskList from '../components/TaskList/TaskList'
import { Task } from '../types';
import { fetchTasks, deleteTask as deleteTaskApi } from '../services/api';

const Tasks: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    

    const fetchAllTasks = async () => {
        try {
            const fetchedTasks = await fetchTasks();
            setTasks(fetchedTasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    // Fetch tasks when the component mounts
    useEffect(() => {
        fetchAllTasks();
    }, []);


    return (
        <div>
            <TaskForm onTaskAdded={fetchAllTasks}/> {/* Correctly rendering TaskForm as a JSX element */}
            <TaskList tasks={tasks}/>
        </div>
    );
};

export default Tasks;
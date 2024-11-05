import React, { useState } from "react";
import styles from "./TaskForm.module.css";
import { addTask } from "../../../services/api";


interface TaskFormProps {
    onTaskAdded: () => void;
}



const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdded }) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [titleError, setTitleError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission

        setTitleError(null);

         // Input validation
         if (!title.trim()) {
            setTitleError("Title is required.");
            return; // Prevent form submission
        }

        try {
            const newTask = await addTask({title, description});
            console.log('Task added:', newTask);
            setTitle("");
            setDescription("");
            onTaskAdded();
        } catch (error) {
            console.error('Error adding task:', error)
        }
    };

    return (
        <div className={styles.form_container}>
            <h3>Add new task</h3>
            <form action="post" className={styles.form} onSubmit={handleSubmit}>
                {titleError ? (
                    <span className={styles.error}>{titleError}</span> // Show error if exists
                ) : (
                    <label>Title </label> // Show label if no error
                )}
                <input
                    className={styles.input}
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} // Update state on input change
                />
                <label>Description</label>
                <input
                    className={styles.input}
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} // Update state on input change
                />
                <button type="submit" className={styles.btn}>Add</button>
            </form>
        </div>
    );
};

export default TaskForm;
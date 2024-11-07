import React, { useState } from "react";
import styles from './AddTask.module.css'
import { Task } from "../../types";
import { addTask } from "../../services/api";

const AddTask: React.FC = () => {
    // Ensure `assigned_at` is initialized as a `Date` object
    const [task, setTask] = useState<Omit<Task, 'task_id'>>({
        title: '',
        description: '',
        assigned_at: new Date() // Store as Date object
    });
    const [errors, setErrors] = useState<{ [key: string]: string}>({});
    const [submitting, setSubmitting] = useState(false);

    const validateValues = (inputValues: any) => {
        let errors: { [key: string]: any } = {}
        if (!inputValues.title.trim()) {
            errors.title = "Title is empty";
        }
        return errors;
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // If the name is 'assigned_at', convert the value to a Date object
        const newValue = name === "assigned_at" ? new Date(value) : value;

        setTask((prevTask) => ({
            ...prevTask,
            [name]: newValue,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = validateValues(task)
        setErrors(newErrors);
        if (Object.keys(newErrors).length == 0) {
            await addTask(task);
            setSubmitting(true);
        }
    };

    // Format the `assigned_at` field to match `datetime-local` format (YYYY-MM-DDTHH:MM)
    const formattedAssignedAt = task.assigned_at
        ? task.assigned_at.toISOString().slice(0, 16)
        : "";

    return (
        <div className={styles.form_container}>
            <div className={styles.form_header}>
                Add Task
            </div>
            <form onSubmit={handleSubmit} className={styles.form_main}>
                <label style={{ color: errors.title ? "red" : "black" }}>
                    {!errors.title ? "Title" : "Title is required"}
                </label>
                <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleInputChange}
                />
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={task.description}
                    onChange={handleInputChange}
                />
                <label>Due Time</label>
                <input
                    type="datetime-local"
                    name="assigned_at"
                    value={formattedAssignedAt} // Use formatted value here
                    onChange={handleInputChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddTask;
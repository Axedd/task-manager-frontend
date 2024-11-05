const BASE_URL = 'http://localhost:6969/api';


export const fetchTasks = async () => {
    try {
        const response = await fetch(`${BASE_URL}/tasks`, {
            method: 'GET',
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch tasks:', error);
        throw error; // Rethrow the error for handling in the component
    }
}



export const addTask = async (task: {title: string, description: string}) => {
    try {
        const response = await fetch(`${BASE_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        if (!response.ok) {
            throw new Error('Failed to add task');
        }
        const data = await response.json();
        return data; // Return the created task
    } catch (error) {
        console.error('Failed to add task:', error);
        throw error; // Rethrow the error for handling in the component
    }
};

export const deleteTask = async (taskId: number) => {
    try {
        const response = await fetch(`${BASE_URL}/tasks/delete`, {
            method: 'POST', // Ensure you're using POST method
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ targetId: taskId }), // Ensure body is formatted correctly
        });

        if (!response.ok) {
            throw new Error('Failed to delete task');
        }
        return await response.json(); // Optional: return any response if needed
    } catch (error) {
        console.error('Failed to delete task:', error);
        throw error; // Rethrow the error for handling in the component
    }
}
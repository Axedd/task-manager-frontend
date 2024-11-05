// Define the type for your user information
export  interface User {
    id: number;
    username: string;
}

export  interface AuthContextType {
    isAuthenticated: boolean;
    loading: boolean; // New loading state
    user: User | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}
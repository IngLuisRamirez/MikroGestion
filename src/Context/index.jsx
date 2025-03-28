import { createContext, useEffect, useState } from "react";

export const MikrotikContext = createContext();
export const MikrotikProvider = ({ children }) => {
    const [isNavBarVisible, setIsNavBarVisible] = useState(true);
    const toggleNavBar = (visible) => {
        setIsNavBarVisible(visible);
    };

    const [isAddUserOpen, setIsAddUserOpen] = useState(false);
    const openAddUser = () => setIsAddUserOpen(true);
    const closeAddUser = () => setIsAddUserOpen(false);

    const [selected, setSelected] = useState("dashboard");

    const [progress, setProgress] = useState(50);
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 100) + 1;
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(getRandomNumber());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/src/data/Users.json")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);
   
    const addUser = (user) => {
        const newUser = { id: user.cedula, ...user };
        setUsers([...users, newUser]);
    };

    const updateUser = (id, updatedUser) => {
        setUsers(users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user)));
    };

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };


    
      

    return (
        <MikrotikContext.Provider
            value={{
                isNavBarVisible,
                isAddUserOpen,
                openAddUser,
                closeAddUser,
                toggleNavBar,
                selected,
                setSelected,
                progress,
                users,
                addUser,
                updateUser,
                deleteUser,
            }}
        >
            {children}
        </MikrotikContext.Provider>
    );
};

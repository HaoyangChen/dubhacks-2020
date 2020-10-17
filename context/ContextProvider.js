import React, { useContext } from 'react';

export const AppContext = useContext({
    user: { id: '' },
    login: () => {},
    logout: () => {},
});

export default function ContextProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (user) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AppContext.Provider
            value={{
                user,
                login,
                logout,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

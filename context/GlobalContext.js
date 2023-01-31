import React, { useState, useContext } from 'react';
import pb from '../lib/pb.js';

const AppContext = React.createContext();

export function AppContextProvider({children}) {
    const [user, setUser] = useState(null);
    async function login(data) {
        try {
            console.log(data)
            const authData = await pb.collection('users').authWithPassword(data.email, data.password);
            if (authData) {
                setUser(authData)
                return true
            }
            else {
                return false
            }
        }
        catch (err) {
            console.log(err)
            return false
        }
    }
    return (
        <AppContext.Provider value={{ login, user }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

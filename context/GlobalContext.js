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

    async function googlelogin(data){
        try{
            const authData = await pb.collection('users').authWithOAuth2(
                'google',
                'CODE',
                'VERIFIER',
                'REDIRECT_URL',
                // optional data that will be used for the new account on OAuth2 sign-up
                {
                  'name': 'test',
                },
            );
            return true 
        }
        catch(err){
            console.log(err)

        }
    }
    return (
        <AppContext.Provider value={{ login, googlelogin, user }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

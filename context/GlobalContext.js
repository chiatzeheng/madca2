import React, { useState, useContext } from 'react';
import pb from '../lib/pb.js';

const AppContext = React.createContext();

export function AppContextProvider({children}) {
    const [records, setRecords] = useState([]);
    const [userData, setUserData] = useState([]);
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

        async function fetchData() {
            try {
              const data = await pb.collection('data').getFullList(10 ,{ sort: '-created', })
              setRecords(data.map((record, index) => ({ 
                body: record.body, 
                id: index, 
                title: record.title,
                data: record.data,
                link: record.link,
                offering: record.offering          
              })));
              return records 
            } catch (error) {
              console.log(error)
            }
         }

         async function fetchFulldata(id){
              try {
      
                 console.log(data)
                 setUserData(data)
                 return userData
              } catch (error) {
                 console.log(error.OriginalError)
              }
         }

    
    
    return (
        <AppContext.Provider value={{ login, fetchData,  fetchFulldata , user, records, userData }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

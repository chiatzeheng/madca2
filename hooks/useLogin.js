import { useState } from 'react';
import pb from '../lib/pb';

export default function useLogin() {

    async function login({username, password}) {
        try {
            const authData = await pb.collection('users').authWithPassword(username, password);
            console.log(authData)
        } catch (err) {
            console.log(err.originalError)
        }
    }
    return {login}
}

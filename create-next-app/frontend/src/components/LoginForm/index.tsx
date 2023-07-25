'use client';

import React, { useState } from 'react';
import { login } from '@/lib/AuthFunctions';

export default function LoginForm() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async (e: any) => {
        e.preventDefault();
        const res = await login( email, password );
    }

    return (
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Email" onChange={(e: any) => {setEmail(e.target.value)}} />
            <input type="password" placeholder="Password" onChange={(e: any) => {setPassword(e.target.value)}} />
            <button type="submit">Login</button>
        </form>
    )
}
'use client';

import React from "react";
import { signOut, signIn } from "next-auth/react";

export function LogoutButton() {
    return (
        <button onClick={() => signOut()}>Logout</button>
    )
}

export function LoginButton() {
    return (
        <button onClick={() => signIn('google')}>Login</button>
    )
}
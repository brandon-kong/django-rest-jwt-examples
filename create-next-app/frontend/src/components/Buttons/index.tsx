'use client';

import React from "react";
import { signOut } from "next-auth/react";

export function LogoutButton() {
    return (
        <button onClick={() => signOut()}>Logout</button>
    )
}
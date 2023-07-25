'use server';

import axios from "../axios";
import ax from 'axios';
import { cookies } from 'next/headers'

export const login = async (email: string, password: string) => {
    try {
        const res = await axios.post('users/login', { email, password });
        return res.data;
    } catch (err) {
        return false;
    }
       
};

export const register = async (email: string, password: string) => {
    try {
        const res = await axios.post('users/create/email', { email, password });

        if (res.data.detail.access) {
            cookies().set({
                name: 'access',
                value: res.data.detail.access,
                path: '/',
                httpOnly: true,
                maxAge: 60 * 5,
            })

            cookies().set({
                name: 'refresh',
                value: res.data.detail.refresh,
                path: '/',
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7,
            })

            console.log(cookies().get('access'))
        }
        return res.data;
    } catch (err) {
        return false;
    }
}

export const logout = async () => {
    const refresh = cookies().get('refresh');
    const access = cookies().get('access');
    console.log(refresh)


    try {
        const res = await axios.post('users/token/blacklist', {
            refresh: refresh?.value,
        },
        {
            headers: {
                'Authorization': `Bearer ${access?.value}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        if (res.data.status_code === 200) {
            cookies().delete('access')
            cookies().delete('refresh')
        }

        console.log(res.data)
        return res.data;
    } catch (err) {
        return false;
    }
}
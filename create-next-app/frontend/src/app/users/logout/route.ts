import { NextResponse } from 'next/server';
import axios from 'axios';
import { cookies } from 'next/headers'

export async function POST(req: Request) {
    const data = await req.json();
    //console.log(data.data)

    try {
        const res = await axios.post('http://127.0.0.1:8000/users/create/email',{
            email: data.email,
            password: data.password
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        if (res.data.access) {
            cookies().set({
                name: 'access',
                value: res.data.access,
                path: '/',
                httpOnly: true,
                maxAge: 60 * 5,
            })

            cookies().set({
                name: 'refresh',
                value: res.data.refresh,
                path: '/',
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7,
            })

            return new Response(JSON.stringify(res.data), {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
        }
    }
    catch (err: any) {
        console.log(err.response.data)
        return new Response('ops')
    }

    return new Response('ops')
}
import { useCookies } from 'react-cookie'

type CookieOptions = {
    path?: string,
    maxAge?: number,
    httpOnly?: boolean,
    secure?: boolean,
    sameSite?: 'strict' | 'lax' | 'none' | undefined
}

export const setCookie = (key: string, value: string, options: CookieOptions) => {
    const [cookies, setCookie, removeCookie] = useCookies()
    
    console.log(cookies)
    setCookie(key, value, options)
}

export const getCookie = (key: string) => {
    const [cookies, setCookie] = useCookies([key])
    
    return cookies[key]
}

export const removeCookie = (key: string) => {
    const [cookies, setCookie, removeCookie] = useCookies([key])
    
    removeCookie(key)
}
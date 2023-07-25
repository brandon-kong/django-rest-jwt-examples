import axios from "../axios";
import ax from 'axios';

export const login = async (email: string, password: string) => {
    try {
        const res = await axios.post('users/login', { email, password });
        return res.data;
    } catch (err) {
        throw new Error('Could not login');
    }
       
};

export const register = async (email: string, password: string) => {
    try {
        const res = await axios.post('users/create/email', { email, password });
        return res.data;
    } catch (err) {
        throw new Error('Could not register');
    }
}
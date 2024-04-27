import axios from 'axios';

const BASE_URL = 'https://onecompiler-apis.p.rapidapi.com/api/v1'; // One Compiler API

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'onecompiler-apis.p.rapidapi.com',
    }
});

const runCode = async (code) => {
    try {

        const response = await api.post('/run', {
            language: 'javascript',
            stdin: null,
            files: [{ name: 'index.js', content: code }],
        });
        return response.data;
    } catch (error) {
        return { err: error.message }
    }
};

export { runCode };

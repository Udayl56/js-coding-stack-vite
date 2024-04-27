import axios from 'axios';

export const loader = ({ params }) => {
    return fetch(`https://js-coding-stack.onrender.com/api/problem/${params.id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('problem not found');

            }
            return response.json();
        })
        .then(json => {
            return json;
        })
        .catch(error => {
            throw error;
        });
};






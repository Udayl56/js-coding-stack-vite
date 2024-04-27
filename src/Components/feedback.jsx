import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isFeedbackResp, setFeedbackResp] = useState(null);
    const [isError, setError] = useState(null);

    const submitFormResp = () => {
        if (isFeedbackResp || isError) {
            if (isFeedbackResp) {
                return <div className='text-success'>{isFeedbackResp}</div>
            }
            if (isError) {
                return <div className='text-warning'>{isError}</div>
            }
        }
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://js-coding-stack.onrender.com/feedback/submit', formData);
            setFeedbackResp(response.data);

        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };

    return (
        <form
            className="text-light border-color rounded-4 rounded-bottom-0 shadow-lg "
            id="contactForm"
            name="contactForm"
            onSubmit={handleSubmit}
        >
            <div className="form-group rounded-4 rounded-bottom-0 p-2" style={{ background: '#0C1C3E' }}>
                <h6 className='p-2'>Feedback</h6>
            </div>
            <div className="form-group p-2 ">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-100 p-2  rounded-3  bg-light'
                    placeholder='Your name'

                />
            </div>
            <div className="form-group p-2 ">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-100 p-2   rounded-3  bg-light'
                    placeholder='Your email'

                />
            </div>
            <div className="form-group p-2 ">
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className='w-100 p-2  rounded-3 bg-light '
                    placeholder='Message'
                    rows={6}
                    required

                ></textarea>
            </div>
            <div className="p-3">
                <button type="submit" className='btn btn-primary w-100 border-none text-center rounded-3'>Submit</button>
            </div>
            <div className="p-3 " style={{ background: '#0C1C3E' }}>
                {submitFormResp()}
            </div>

        </form>
    );
};

export default ContactForm;

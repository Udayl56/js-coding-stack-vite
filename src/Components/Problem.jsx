import React, { useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { runCode } from "./compileAPI";
import { CodeOutput } from './CodeOutput';

export const Problem = ({ code }) => {

    const data = useLoaderData(); // react-router loader data function 

    const [isLoading, setLoading] = useState(false);
    const [output, setOutput] = useState({

    });
    const OutputCode = async () => {

        try {

            setLoading(true);
            const responseData = await runCode(code);
            setOutput(responseData);
            setLoading(false);
        } catch (error) {
            alert('Error:', error);

        }
    };






    return (
        <div className="text-white" >
            <div style={{ overflowY: 'auto', height: '580px', overflowX: 'hidden' }}>

                <div className="row p-2">
                    <h6 className="text-white">{data.title}</h6>
                    <p style={{ color: '#A9A9A9' }}>{data.question}</p>
                </div>
                <div className='ps-4 pe-4'>
                    <div className=" p-2 rounded-3 border-cm" >
                        <span>Test</span>
                        <ul className="list-unstyled m-0 p-0">
                            {data.tests.map((test, index) => (
                                <li key={index} className="p-1 m-1">
                                    {test.input}
                                    <hr className="m-0" />
                                </li>
                            ))}
                        </ul>
                        <div className=' d-flex justify-content-end'>
                            <button className="ps-4 pe-4 m-1  fw-bold text-center rounded-5" style={{
                                border: '2px solid #ED8403', background: 'none', color: '#ED8403'
                            }} onClick={OutputCode}>{isLoading ? 'Compiling..' : < span >Run <FaPlay /></span>} </button>

                        </div>

                    </div></div>
                <div className="d-flex ps-4 pe-4 m-0 flex-column ">

                    <CodeOutput Outputdata={output} data={data} />
                </div>
            </div>

        </div >
    );
};




import { useState } from 'react';
import problemData from '../problemData.json';
import { NavLink, Form } from "react-router-dom";


export const ProblemList = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredProblems = problemData.problems.filter(problem =>
        problem.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const slugify = (text) => {
        return text.toString().toLowerCase().trim()
            .replace(/\s+/g, '-')           // Replace spaces with dashes
            .replace(/[^\w\-]+/g, '')       // Remove non-word characters
            .replace(/\-\-+/g, '-');        // Replace multiple dashes with single dash
    };


    return (
        <div className="p-2" style={{ overflowY: 'scroll', height: '570px' }}>

            <div className='d-flex flex-row' ><input

                type="search"
                placeholder="Search Problem ..."
                className="rounded-5 p-2 ps-4 text-light flex-fill fw-bold"
                style={{ background: '#2D3542', border: 'none' }}
                aria-label="Search problem"
                value={searchQuery}
                onChange={handleInputChange}

            /></div>


            <ul className=" text-light  list-unstyled">
                {filteredProblems.map((problem) => (
                    <li key={problem.id} className=' link-active d-flex flex-column' >

                        <NavLink to={`/${slugify(problem.title)}/${problem.id}`} className=' p-2 m-2' >{problem.title}</NavLink>

                    </li>
                ))}
                {filteredProblems.length === 0 && <li>No matching problems found.</li>}
            </ul>
        </div>
    );
}






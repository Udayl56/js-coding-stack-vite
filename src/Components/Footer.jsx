
import React from 'react';
import { IoHeart } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

// footer component

export function Footer() {
    return (
        <div className="w-100 d-flex p-1 align-items-center  justify-content-center  " style={{
            position: 'relative',
            bottom: '0px',
        }}>
            <div className=" d-flex align-items-center  justify-content-center">
                <ul className="list-unstyled  text-light m-0 d-flex align-items-center  justify-content-center">

                    <li className="p-2 d-inline">Made by <IoHeart color='red' /> <a href="https://github.com/Udayl56" target='_blank' style={{ color: '#A9A9A9', textDecoration: 'none' }}>Udayl56 <FaGithub /></a> </li>
                </ul>
            </div>
        </div>
    );

}
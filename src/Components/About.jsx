import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import ContactForm from "./feedback";


export function About() {
    return (
        <div>
            <div className='container text-light '>
                <div className='row d-flex justify-content-between p-2 mt-4'>
                    {/* About Js Coding Stack */}
                    <div className=" col-sm-6  ">
                        <h1 className='fw-bold'>About Js Coding Stack</h1>
                        <div className='p-2'>
                            <p className=' text-light fs-5'>Welcome to JS Coding Stack, your go-to platform for mastering JavaScript coding skills! Our mission is to provide a stimulating and rewarding coding experience by offering a diverse range of challenging problems that reflect real-world industry scenarios.</p>
                        </div>
                        <hr />

                        {/* Developer Contact */}
                        <div className="row  d-flex justify-content-between">
                            <div className="col-12">
                                <p className='p-2 rounded-4' style={{ background: ' #344054' }}>JS Coding Stack offers something for everyone. Join our community today and embark on a journey of growth, exploration, and mastery in JavaScript coding. Let's push the boundaries of what's possible and elevate your coding journey to new heights with JS Coding Stack</p>
                                <h4 className=' mt-2 fw-bold '>Developer Contact</h4>
                                <ul className="list-unstyled text-white m-0">
                                    <li className=" flex-fillp-1  d-flex align-items-center">
                                        <FaGithub /><a href="" className=' p-1 link-light text-decoration-none' rel="noreferrer noopener">
                                            @Udayl59</a>
                                    </li>
                                    <li className=" p-1 flex-fill d-flex align-items-center"><FaLinkedinIn />
                                        <span className=' p-1'>Linkedin.com</span>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>

                    {/* feedback form */}
                    <div className="col-sm-6">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </div>

    );
}



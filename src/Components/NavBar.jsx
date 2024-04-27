
import { NavLink } from "react-router-dom";
import { DiJavascript1 } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
export const NavBar = () => {

    // navbar


    return (
        <div className=" d-flex flex-row  justify-content-center  text-light " style={{
            maxHeight: '50px'

        }} >
            <div class="p-2 d-flex align-items-center flex-fill "> <DiJavascript1 color="yellow" size='40' />
                <span className="p-1 font-monospace">Coding Stack</span>
            </div>
            <div className=" d-flex align-items-center  justify-content-center">
                <ul className="list-unstyled  m-0 d-flex align-items-center  justify-content-center">

                    <li className="p-sm-2 p-1 d-inline link-active-navbar"><NavLink to="/" className='p-2'
                    >Home</NavLink> </li>
                    <li className="p-sm-2 p-1 d-inline link-active-navbar "><NavLink to="/about-us" className='p-2'>About Us</NavLink></li>
                    <li className="p-sm-2 p-1 d-inline link-active-navbar  "><a href="https://github.com/Udayl56" target="_blank" className='p-2'>< FaGithub size='30' /></a></li>


                </ul>
            </div>


        </div >

    );
}
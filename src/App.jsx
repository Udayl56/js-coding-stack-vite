import { useState } from "react";
import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { ProblemList } from "./Components/ProblemList";
import "./index.css";




export function App() {


  const [list, showList] = useState(false);
  const show = () => {
    showList(!list);

  }

  const displayList = () => {
    if (list) {
      return (<ProblemList />)
    }
  }


  return (


    <div className="container-fluid m-0 p-0">
      <div className="container ">
        <NavBar />
      </div>

      <hr className="text-light m-0" />
      <div className='row p-0 m-0 d-flex align-items-center justify-content-center ' >
        <div className="d-md-none dropdown" >
          <div className="text-primary text-center">List of problem<FiChevronDown /></div>
          <div className="dropdown-content"><ProblemList /></div>
        </div>
        <Outlet />
      </div>
      <hr className="text-light m-0" />
      <Footer />
    </div>


  );
}



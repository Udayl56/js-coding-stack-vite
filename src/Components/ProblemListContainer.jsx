import { useState } from "react";
import { ProblemList } from "./ProblemList";
import { FiChevronLeft } from "react-icons/fi";
import { Outlet, useNavigation } from "react-router-dom";

export const ProblemListContainer = () => {

    const navigation = useNavigation();

    const fadeEffect = () => {
        if (navigation.state === "loading") {
            return (
                <div className="fade"></div>
            );
        }
        else {
            return < Outlet />
        }
    }




    return (

        <>
            <div className="col-md-3 p-2 d-md-block d-sm-none d-none">

                <ProblemList />
            </div>

            <div className="col-md-9 " style={{ background: '#161B22' }}>
                <div className="row d-flex p-0 m-0 justify-content-center ">
                    {fadeEffect()}
                </div>
            </div>
        </>
    );


}



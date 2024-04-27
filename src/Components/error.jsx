
import { Link, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="row text-light d-flex  justify-content-center align-items-center " style={{ height: '85vh' }}>
            <div className="col-6 text-center">
                <span>Oops!</span>
                <h1>{error.status}</h1>
                <span>Not Found!</span>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to='/'>Home</Link>
            </div>
        </div>

    );
}
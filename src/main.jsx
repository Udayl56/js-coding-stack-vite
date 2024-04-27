import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider, useNavigation
} from "react-router-dom";
import { loader } from "./Components/problemLoaderAPI";
import { App } from "./App";
import { ProblemListContainer } from "./Components/ProblemListContainer";
import { CodeEditor } from "./Components/codeEditor";
import { About } from "./Components/About";
import { ErrorPage } from "./Components/error";
import { JsCodeEditor } from "./Components/defualtCodeEditor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {

        path: '/',
        element: <ProblemListContainer />,
        errorElement: <ErrorPage />,

        children: [
          {
            path: '/',
            index: true,
            element: <JsCodeEditor />,
            errorElement: < ErrorPage />,


          },
          {
            path: '/:problemname/:id',
            element: <CodeEditor />,
            errorElement: <ErrorPage />,
            action: () => { return redirect("/"); },
            loader: loader,
          },
        ]
      },
      {
        path: '/about-us',
        element: <About />,
        errorElement: <ErrorPage />
      }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
